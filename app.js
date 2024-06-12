const mongoose=require("mongoose")
const cors=require("cors")
const express=require("express")


const app=express()
app.use(cors())
app.use(express.json())



app.post("/add",(req,res)=>{
    let input=req.body
    console.log(input)
    res.json({"status":"success"})
})



app.listen(8081,()=>{
    console.log("server started")
})