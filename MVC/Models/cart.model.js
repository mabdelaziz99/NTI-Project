const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    name:String,
    price:Number,
    product_id:String
})

module.exports = mongoose.model('cart',cartSchema);