const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name:String,
    email: String,
    price:Number,
    user_id: String,
    product_id: [String],
    totalPrice: Number,
    address: String,
    city: String
    
})

module.exports = mongoose.model('order',orderSchema);