 // router
 const express = require("express");
 const morgan = require("morgan");
 const app = express();
 const mongoose = require("mongoose");
 const productRoutes = require("./routes/product.routes");
//  console.log(users);

mongoose
.connect("mongodb://127.0.0.1:27017/node5to7")
.then(()=> console.log(`Database connection established success....`))
.catch(err => console.log(err));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
 
app.get("/", (req,res)=>{
  res.send("welcome to Express Server");
  });


  
app.use("/api/product",productRoutes); 

  app.listen(5055,()=>{
    //Database connection    
    console.log(`server start at http://localhost:5055`);
    
  });


  