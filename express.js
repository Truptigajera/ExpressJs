 // router
 const express = require("express");
 const morgan = require("morgan");
 const app = express();
 const mongoose = require("mongoose");
 const productRoutes = require("./routes/product.routes");
//  console.log(users);

require('dotenv').config()
port=process.env.port
const url = process.env.MONGO_URI


mongoose
.connect(url)
.then(()=> console.log(`Database connection established success....`))
.catch(err => console.log(err));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
 
app.get("/", (req,res)=>{
  res.send("welcome to Express Server");
  });


  
app.use("/api/product",productRoutes); 

  app.listen(port,()=>{
    //Database connection    
    console.log(`server start at http://localhost:5055`);
    
  });


  //git checkout -b name
  //git add .
  //git commit -m ""
  //git push -u origin branchname

  