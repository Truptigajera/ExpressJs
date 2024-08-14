// const products = require("../product.json");
const Product= require("../model/user.model");

exports.addNewproduct = async (req,res) => {
    try{
      const product = await Product.create({...req.body});
      res.status(201).json({product,message:"product Added successfully."});
    } catch(err){
      console.log(err);
      res.status(500).json({message:"Internal server Error"});  
    } 
  };

   