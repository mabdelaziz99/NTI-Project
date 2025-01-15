const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    name:String,
    price:Number,
    desc:String,
    product_id:String,
    imgURL: String
})

module.exports = mongoose.model('cart',cartSchema);