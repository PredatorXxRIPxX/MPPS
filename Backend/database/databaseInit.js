import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const openDb = async ()=>{
   return open({
      filename:'./backend/database.sqlite',
      driver:sqlite3.Database
   })
}

export const initializeDB = async ()=>{
   const db = await openDb()
   db.exec(`
      CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
      `)
      return db
}