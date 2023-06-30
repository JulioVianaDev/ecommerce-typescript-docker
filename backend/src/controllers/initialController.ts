import { RequestHandler } from "express";

export const getIniti: RequestHandler= (req,res,next)=>{
  res.json({message: "amem"})
}