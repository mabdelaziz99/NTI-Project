const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/order.controller');

// router.get('/',cartController.);
router.post('/create',orderController.createOrder);

module.exports = router;