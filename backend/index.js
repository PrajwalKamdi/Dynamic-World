import express from 'express'
const server = express();
import { configDotenv } from 'dotenv';
configDotenv();
const PORT = process.env.PORT;
console.log(PORT)
server.listen(PORT, ()=>{
  console.log("Working...")
});
