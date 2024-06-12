const mongoose=require("mongoose")
const cors=require("cors")
const express=require("express")
const { vehiclemodel } = require("./models/vehicle")


const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://hari:hari001@cluster0.ocavfn3.mongodb.net/vehicledb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    // console.log(input)
    let vehicle=new vehiclemodel(input)
    vehicle.save()
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    vehiclemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch((error)=>{
        res.json(error)
    })
})

app.post("/search",(req,res)=>{
    let input=req.body
    vehiclemodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch((error)=>{
        res.json(error)
    })
})

app.post("/delete",(req,res)=>{
    let input=req.body
    vehiclemodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch((response)=>{
        res.json({"status":"error"})
    })
})

app.listen(8081,()=>{
    console.log("server started")
})