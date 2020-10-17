const Validation = require('../models/validation');
const Product = require('../models/addProduct'); 

exports.AddProducts = (req,res,next)=>{
    console.log(req.body);
    const prd = new Product(req.body);
    prd.addProduct();
    res.send("product added");
}

exports.getProducts= async(req,res,next)=>{
    const prd = new Product(req.body);
    const response = await prd.getProduct();
    res.send(response);
}

exports.getAllProducts = async(req,res,next)=>{
    const prd = new Product(0);
    const response = await prd.getAllProducts();
    console.log(response);
    res.send(response);
}
