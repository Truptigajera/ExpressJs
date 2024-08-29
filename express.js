 // router
  
 const express = require("express");
 const morgan = require("morgan");
 const app = express();
 const mongoose = require("mongoose"); 
 const productRoutes = require("./routes/product.routes");
 const userRoutes = require("./routes/user.routes");
//  const cors = require("cors");
 const path = require("path");
 
//  console.log(users);

require('dotenv').config()
const port=process.env.PORT
const url = process.env.MONGO_URL

mongoose
.connect(url)
.then(()=> console.log(`Database connection established success....`))
.catch(err => console.log(err));

// app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/public/images",express.static(path.join(__dirname,"public/images")))
// app.use("/public",express.static(path.join(_dirname,"public")))
 
app.get("/", (req,res)=>{
  res.send("welcome to Express Server");
  });


  
app.use("/api/product",productRoutes); 
app.use("/api/user",userRoutes);

  app.listen(port,()=>{
    //Database connection    
    console.log(`server start at http://localhost:${port}`);
    
  });


  //git checkout -b name
  //git add .
  //git commit -m ""
  //git push -u origin branchname

  