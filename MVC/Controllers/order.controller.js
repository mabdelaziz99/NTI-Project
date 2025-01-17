const orderModel = require('../Models/order.model');

exports.createOrder = async(req,res)=>{
    try{
        console.log('Controller log ',req.body);

        // req.body.imageURL = req.file.filename;
        const order = await orderModel.create(req.body);
        console.log('Order Controller log ',req.body);
        res.status(201).json(order);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}
exports.getOrder= async(req,res)=>{
    try{
        const orders = await orderModel.find();
        res.status(200).json(orders);
    
    } catch(err){
        res.status(500).json({error:err.message});
    }
}


