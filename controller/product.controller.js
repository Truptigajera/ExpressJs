// const products = require("../product.json");
const Product = require("../model/product.model");
const ProductServices = require('../services/product.service');
const productService = new ProductServices();
const Messages = require('../helper/messages')

exports.addNewProduct = async (req, res) => {
  try {
      const { productName, productPrice, Validity, Quntity } = req.body;
      let product = await productService.getProduct({title:req.body.title,isDelete:false})
      if(product)
          return res.status(400).json({message:Messages.ALREADY_Exists})
      product = await productService.addNewProduct(req.body);
      res.status(201).json({product,messege:Messages.ADD_NEW_PRODUCT});      
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" })
  }
};

exports.getAllproduct = async (req, res) => {
  try {
    let products = await Product.find({isDelete: false});
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

 
exports.deleteproduct = async (req,res) => {
  try{
    let product = await Product.findOne({_id:req.query.productId,isDelete:false});
    // console.log(user);
    if(!product){
      return res.status(404).json({message:'Product not found'});
}
 
product = await Product.findByIdAndUpdate(product._id,{isDelete:true},{new:true});
    res.status(200).json({product,message:'product Delete success'});

  }catch (err){
    console.log(err);
    res.status(500).json({message:'Internal server error'});
    
  }
};