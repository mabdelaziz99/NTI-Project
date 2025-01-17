const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    userType:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'userType',
        required:true
    },
    birthDate:{
        type: Date
    },
    phoneNumber:{
        type: Number
    },
    gender:{
        type: String
    },
    status:{
        type: String
    },
    about:{
        type: String
    },
    age:{
        type: Number
    }
},{timestamps:true});

module.exports = mongoose.model('user',userSchema);