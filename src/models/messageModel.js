const mongoose =require('mongoose')

const messageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    dateTime:{
        time:Date
    }

},{timestamps:true})

module.exports=mongoose.model('message',messageSchema)