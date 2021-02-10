import mongoose from 'mongoose'

const postModel=mongoose.Schema({
    
    imgName:String,
    text:String, 
    email:String,
    phone:String
})
