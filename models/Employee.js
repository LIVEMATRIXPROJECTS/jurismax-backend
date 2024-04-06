const mongoose=require("mongoose")

const EmployeeSchema=new mongoose.Schema({
    username:String,
    Email:String,
    password:String,
    confirmPassword:String
})

const EmployeeModel=mongoose.model("employees",EmployeeSchema)
module.exports=EmployeeModel