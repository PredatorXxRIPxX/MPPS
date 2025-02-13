import 'dotenv/config'
const PORT = process.env.PORT;
import express from 'express';
import cors from 'cors';
import validateData from './middelwares/validateData.js';
import {initializeDB} from './database/databaseInit.js'
const app = express();
app.use(cors())
app.use(express.json())

app.post('/sendContactForm',validateData,async (req,res)=>{
   
try {
   const db = await initializeDB();
   const { name, email, subject, message } = req.body
   await db.run(
      `INSERT INTO contact_messages (name, email, subject, message)
       VALUES (?, ?, ?, ?)`,
      [name, email, subject, message]
   )
   res.status(200).json({
      success:true,
      message:"Message saved successfully"
   })
} catch (error) {
   res.status(500).json({
      success:false,
      message:"Faild to save the message"
   })
}
})


app.listen(PORT,()=>{
   console.log('Express + TS server is listening on PORT: ',PORT);
})