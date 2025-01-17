const cartModel = require('../Models/cart.model');

exports.addCartItem = async(req,res)=>{
    try{
        console.log('Controller log ',req.body);

        // req.body.imageURL = req.file.filename;
        const cartItem = await cartModel.create(req.body);
        console.log('Controller log ',req.body);
        res.status(201).json(cartItem);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

// exports.removeCartItem= async(req,res)=>{
//     try{
//         const products = await productModel.find();
//         res.status(200).json(products);

//     } catch(err){
//         res.status(500).json({error:err.message});
//     }
// }
exports.getCartItemsCount= async(req,res)=>{
    try{
        const cart = await cartModel.find()
        const cartCount = cart.length
        console.log(cartCount);
        res.status(200).json(cartCount);

    } catch(err){
        res.status(500).json({error:err.message});
    }
}
exports.getCartItems= async(req,res)=>{
    try{
        const cart = await cartModel.find();
        res.status(200).json(cart);

    } catch(err){
        res.status(500).json({error:err.message});
    }
}
exports.deleteAllCartItems= async(req,res)=>{
    try{
        const cart = await cartModel.deleteMany();
        res.status(200).json(cart);

    } catch(err){
        res.status(500).json({error:err.message});
    }
}