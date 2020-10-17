const express = require('express');
const router = express.Router();

//defined handlers
const {AddProducts,getProducts,getAllProducts} = require('../controller/productController');

//routs
router.post('/getAllProducts',getAllProducts);
router.post('/addProduct',AddProducts);
router.post('/getProduct',getProducts);

//export
exports.productRout = router;