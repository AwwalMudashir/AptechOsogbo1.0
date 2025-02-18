const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/AptechDataBase")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const EnrollSchema = new mongoose.Schema({
    name:{
        type:String
    },
    phone:{
      type:String
    },
    email:{
        type:String
    },
    program:{
        type:String
    },
    message:{
        type:String
    }
})

const AptechEnrollCollection = new mongoose.model('AptechEnrollCollection',EnrollSchema)
module.exports = AptechEnrollCollection