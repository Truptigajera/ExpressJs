const products = require("../product.json");

exports.addNewproduct=(req,res)=>{
    // console.log(req.body);  
    products.push(req.body);
    res.json({message:"user added successfully"});
  };

  exports.getAllproduct= (req,res)=>{
    res.json(products)
    };

    //get single user

exports.getproduct=(req,res)=>{
    let id= +req.params.id;
    let item = products.find((product)=>product.id === id)
    res.json(item);
  };

    //Replace data- PUT
    exports.replaceproduct=(req,res)=>{
        let id= +req.params.id;
        let productIndex = products.findIndex((item)=> item.id === id);
        products.splice(productIndex,1,req.body);
        res.json({ message: "User has been Replaced"})
      };

      //update Data - Patch
  exports.updateproduct= (req,res)=>{
    let id = +req.params.id;
    let productIndex =products.findIndex((item)=>item.id === id);
    let product = products[productIndex];
    products.splice(productIndex,1,{...product, ...req.body});
    res.json({message :"User has been successfully added"});
  };

  //Delete data- Delete
  exports.deleteproduct = (req,res)=>{
    let id= +req.params.id;
    let productIndex = products.findIndex((item)=> item.id === id);
    products.splice(productIndex,1);
    res.json({ message: "User Delete successfully"})
  };


