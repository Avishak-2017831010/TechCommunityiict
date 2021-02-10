import mongoose from 'mongoose'

const teacpostModel=mongoose.Schema({
    Name:String,
    text:String, 
    email:String,
    phone:String
})
