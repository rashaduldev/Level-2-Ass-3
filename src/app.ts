import express, { Request, Response } from 'express';

const app = express();

// middleware
app.use(express.json())


app.get("/",(req:Request,res:Response)=>{
    res.send({
        status:true,
        message:"server live"
    })
})


export default app;