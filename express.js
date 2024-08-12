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

  //Replace data- PUT
  app.put("/user/:id",(req,res)=>{
    let id= +req.params.id;
    let userIndex = users.findIndex((item)=> item.id === id);
    users.splice(userIndex,1,req.body);
    res.json({ message: "User has been Replaced"})
  });

  //update Data - Patch
  app.patch("/user/:id", (req,res)=>{
    let id = +req.params.id;
    let userIndex = users.findIndex((item)=>item.id === id);
    let user = users[userIndex];
    users.splice(userIndex,1,{...user, ...req.body});
    res.json({message :"User has been successfully added"});
  });

  //Delete data- Delete
  app.delete("/user/:id",(req,res)=>{
    let id= +req.params.id;
    let userIndex = users.findIndex((item)=> item.id === id);
    users.splice(userIndex,1);
    res.json({ message: "User Delete successfully"})
  });

  

  app.listen(5050,()=>{
    console.log(`server start at http://localhost:5050`);
    
  });


  