 // router
 
 
 const express = require("express");
 const morgan = require("morgan");
 const app = express();
 const productRoutes = require("./routes/product.routes");
//  console.log(users);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
 
app.get("/", (req,res)=>{
  res.send("welcome to Express Server");
  });

app.use("/product",productRoutes); 

  app.listen(5055,()=>{
    console.log(`server start at http://localhost:5055`);
    
  });


  