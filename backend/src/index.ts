import express,{Response,NextFunction} from 'express';
import {json }from 'body-parser';
import InitialRoute from './routes/initial'
const app = express();

app.use(json())
app.use(InitialRoute)
app.get('/',(req,res)=>{
  res.send({message: "funcionou de aa"})
})
app.listen(3001,()=>{
   console.log('rodando na porta 3001')
})