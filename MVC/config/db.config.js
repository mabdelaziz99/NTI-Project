const mongoose = require('mongoose');

const connectDB = async ()=>{
   await mongoose.connect('mongodb://127.0.0.1:27017/nti2');
    console.log('database connected')
}

module.exports = connectDB;