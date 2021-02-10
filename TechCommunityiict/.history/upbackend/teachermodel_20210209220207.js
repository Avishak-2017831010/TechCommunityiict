import mongoose from 'mongoose'

const postModel=mongoose.Schema({
    Name:String,
    text:String, 
    email:String,
    phone:String
})
