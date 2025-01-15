const cartModel = require('../Models/cart.model');

exports.addCartItem = async(req,res)=>{
    try{
       
        // req.body.imageURL = req.file.filename;
        const cartItem = await cartModel.create(req.body);
        res.status(201).json(cartItem);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

exports.removeCartItem= async(req,res)=>{
    try{
        const products = await productModel.find();
        res.status(200).json(products);

    } catch(err){
        res.status(500).json({error:err.message});
    }
}
exports.getCartItemsCount= async(req,res)=>{
    try{
        const products = await productModel.find();
        res.status(200).json(products);

    } catch(err){
        res.status(500).json({error:err.message});
    }
}
exports.getCartItems= async(req,res)=>{
    try{
        const products = await productModel.find();
        res.status(200).json(products);

    } catch(err){
        res.status(500).json({error:err.message});
    }
}