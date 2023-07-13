import express from 'express';
import {json }from 'body-parser';

import InitialRoute from './routes/initial'
const cors = require('cors');
const mongoose = require('mongoose')
const dbUser = process.env.MONGODB_USER
const dbPass = process.env.MONGODB_PASSWORD
const dbPort = process.env.MONGODB_DOCKER_PORT
const dbDatabase = process.env.MONGODB_DATABASE

mongoose
  .connect(
    `mongodb://mongodb:${dbPort}/${dbDatabase}`,
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