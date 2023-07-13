import express from 'express';
import {json }from 'body-parser';

import InitialRoute from './routes/initial'
const cors = require('cors');
const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb://mongodb:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Conectado'))
  .catch((err: any) => console.log(err));

const app = express();
require('dotenv').config()

app.use(json())
app.use(InitialRoute)
app.use(cors())
const a = process.env.TESTE

app.get('/',(req,res)=>{
  res.send({message: "funcionou de a",a: a})
})
app.listen(3001,()=>{
   console.log('rodando na porta 3001')
})