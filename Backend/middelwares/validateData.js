import {body,validationResult} from 'express-validator'

export default [
   body('name').isLength({min:1,max:50}).trim().withMessage({
      error:"error in name field",
      location:"name"
   }),
   body('email').trim().isEmail().normalizeEmail().withMessage({
      error:"error in email field",
      location:"email"
   }),
   body('message').isLength({min:20,max:1000}).trim().withMessage({
      error:"error in message",
      location:"message"
   }),
   (req,res,next)=>{
      let errors = validationResult(req.body);
      if(!errors.isEmpty){
         res.status(400).json({
            success:false,
            errors:errors.array()
         })
      }
      next()
   }
]