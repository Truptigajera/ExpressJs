 //PRODUCT TASK 10/08/2024
 
 
 const express = require("express");
 const morgan = require("morgan");
 const app = express();
 const products = require("./product.json");
//  console.log(users);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
 
app.get("/", (req,res)=>{
  res.send("welcome to Express Server");
  });

  //CRUD
  //Creat User

  app.post("/product", (req,res)=>{
    // console.log(req.body);  
    products.push(req.body);
    res.json({message:"user added successfully"});
  });

  //read - get all users

  app.get("/product", (req,res)=>{
      res.json(products)
      });

  //get single user

  app.get("/product/:id",(req,res)=>{
    let id= +req.params.id;
    let item = products.find((product)=>product.id === id)
    res.json(item);
  });

  //Replace data- PUT
  app.put("/product/:id",(req,res)=>{
    let id= +req.params.id;
    let productIndex = products.findIndex((item)=> item.id === id);
    products.splice(productIndex,1,req.body);
    res.json({ message: "User has been Replaced"})
  });

  //update Data - Patch
  app.patch("/product/:id", (req,res)=>{
    let id = +req.params.id;
    let productIndex =products.findIndex((item)=>item.id === id);
    let product = products[productIndex];
    products.splice(productIndex,1,{...product, ...req.body});
    res.json({message :"User has been successfully added"});
  });

  //Delete data- Delete
  app.delete("/product/:id",(req,res)=>{
    let id= +req.params.id;
    let productIndex = products.findIndex((item)=> item.id === id);
    products.splice(productIndex,1);
    res.json({ message: "User Delete successfully"})
  });

  

  app.listen(5055,()=>{
    console.log(`server start at http://localhost:5055`);
    
  });


  