// const products = require("../product.json");
const Product = require("../model/user.model");

exports.addNewproduct = async (req, res) => {
  try {
    let product = await Product.findOne({ email: req.body.email });
    //console.log(product);
    if (product) {
      return res.status(400).json({ message: "Product alredy existe" });
    }
    product = await Product.create(req.body);
    res.status(201).json({ product, message: "product Added successfully." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server Error" });
  }
};

exports.getAllproduct = async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getproduct = async (req, res) => {
  try {
    // let product = await Product.findOne({firstName:req.query.firstName});
    let product = await Product.findOne({ _id: req.query.productId });
    // console.log(user);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });

  }
};

  exports.updateproduct = async (req, res) => {
  try {
    let product = await Product.findById(req.query.productId);
    // console.log(product);
    if (!product) {
      return res.status(404).json({ message: "User not found" });
    }
    //product = await Product.updateOne({_id:product._id},req.body,{new:true});

    //product = await Product.findOneAndUpdate({_id:product._id},req.body,{new:true});

    product = await Product.findByIdAndUpdate(product._id, { $set: req.body }, { new: true });

    res.status(202).json({ product, message: 'product update success' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteproduct = async (req,res) => {
  try{
    let product = await Product.findById(req.query.productId);
    // console.log(user);
    if(!product){
      return res.status(404).json({message:'Product not found'});
}
// product = await Product.deleteOne({_id:product._id})
// product = await Product.findOneAndDelete({_id:product._id})
product = await Product.findByIdAndDelete(product._id)
    res.status(200).json({product,message:'product Delete success'});

  }catch (err){
    console.log(err);
    res.status(500).json({message:'Internal server error'});
    
  }
};

