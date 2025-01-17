const express = require('express');
const router = express.Router();
const cartController = require('../Controllers/cart.controller');

// router.get('/',cartController.);
router.post('/add',cartController.addCartItem);
router.get('/get',cartController.getCartItems);
router.get('/getCount',cartController.getCartItemsCount);
router.delete('/deleteAll',cartController.deleteAllCartItems);
// router.post('/login',cartController.login);

module.exports = router;