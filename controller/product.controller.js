// const products = require("../product.json");
const Product= require("../model/user.model");

exports.addNewproduct = async (req,res) => {
    try{
      let product = await Product.findOne({email:req.body.email});
      //console.log(product);
      if(product){
        return res.status(400).json({message: "Product alredy existe"});
      }
      product = await Product.create(req.body);
      res.status(201).json({product,message:"product Added successfully."});
    } catch(err){
      console.log(err);
      res.status(500).json({message:"Internal server Error"});  
    } 
  };

  exports.getAllproduct = async (req,res)=>{
    try{
      let products = await Product.find();
      res.status(200).json(products);
    }catch(err){
      console.log(err);
      res.status(500).json({message:"Internal server error"});
    }
  };

  exports.getproduct = async (req,res)=>{
    try{
      // let product = await Product.findOne({firstName:req.query.firstName});
      let product = await Product.findOne({_id:req.query.productId});
      // console.log(user);
      if (!product){
        return res.status(404).json({ message:"Product not found"});
      }
      res.status(200).json(product);
    }catch (err){
      console.log(err);
      res.status(500).json({ message:"Internal Server Error"});
      
    }
  };

  

   