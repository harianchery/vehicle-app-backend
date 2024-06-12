const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "no":String,
        "type":String,
        "addr":String
    }
)

let vehiclemodel=mongoose.model("vehicles",schema);
module.exports={vehiclemodel}
