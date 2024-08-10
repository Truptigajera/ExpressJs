 const express = require("express");
 const morgan = require("morgan");
 const app = express();
 const users = require("./friend.json");
//  console.log(users);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
 
app.get("/", (req,res)=>{
  res.send("welcome to Express Server");
  });

  //CRUD
  //Creat User

  app.post("/user", (req,res)=>{
    // console.log(req.body);  
    users.push(req.body);
    res.json({message:"user added successfully"});
  });

  //read - get all users

  app.get("/user", (req,res)=>{
      res.json(users)
      });

  //get single user

  app.get("/user/:id",(req,res)=>{
    let id= +req.params.id;
    let item = users.find((user)=>user.id === id)
    res.json(item);
  });

  app.listen(5050,()=>{
    console.log(`server start at http://localhost:5050`);
    
  });


  