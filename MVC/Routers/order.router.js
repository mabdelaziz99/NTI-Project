const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/order.controller');

// router.get('/',cartController.);
router.post('/create',orderController.createOrder);
router.get('/get',orderController.getOrder);

module.exports = router;