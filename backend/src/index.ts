import express,{Response,NextFunction} from 'express';
import {json }from 'body-parser';

const app = express();

app.use(json())

app.get('/',(req,res)=>{
  res.send({message: "funcionou"})
})
app.listen(3001,()=>{
   console.log('rotando na porta 3001')
})