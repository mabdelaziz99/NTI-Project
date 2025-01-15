const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:String,
    price:Number,
    desc:String,
    imageURL:String
})

module.exports = mongoose.model('product',productSchema);