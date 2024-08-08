const express = require('express')
const server = express() // create server
//const data = require('./friend.json');

const fs = require('fs');
const data = fs.readFileSync('./friend.json','utf-8');
//console.log(data);

//post,get,put,patch,delete


server.get('/', (req, res) => {
  res.write('Hello World!');
  res.end();
})

// server.get("/",(req,res)=>{ 
//   res.write('GET method - 1 ');
//   res.end();
// })

server.post("/",(req,res)=>{
  // res.write('welcome to post Method');
  res.send('<h1>POST METHOD</h1>');
})

server.put("/",(req,res)=>{
  res.json({message:'Hello put method called'})
})

server.patch("/", (req,res)=>{
  res.status(400);
  res.json({message:'Hello patch method called'});
})

server.get("/user",(req,res)=>{
  res.json(JSON.parse(data));
})

// server.get("/login",(req,res)=>{
//   res.write('welcome to login page');
//   res.end();
// })

server.get("/login",(req,res)=>{
  res.write('welcome to login -1');
  res.end();
})

server.listen(5050,()=>{
  console.log('server Start at http://localhost:5050');
  
});

