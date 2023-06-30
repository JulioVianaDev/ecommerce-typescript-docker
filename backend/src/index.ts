import express from 'express';
import {json }from 'body-parser';
import InitialRoute from './routes/initial'
const app = express();
require('dotenv').config()

app.use(json())
app.use(InitialRoute)
const a = process.env.TESTE

app.get('/',(req,res)=>{
  res.send({message: "funcionou de aa",a: a})
})
app.listen(3001,()=>{
   console.log('rodando na porta 3001')
})