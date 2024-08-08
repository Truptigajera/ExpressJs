const express = require('express')
const server = express() // create server
//const data = require('./friend.json');

// const fs = require('fs');
// const data = fs.readFileSync('./friend.json','utf-8');
//console.log(data);

const myFun = (req, res, next) => {
  // console.log(req.query);
  if (req.query.age >= "18") {
    console.log('Success');
    next();
  } else {
    res.json({ message: 'sorry Brother.....' })
  }
}

//server.use(myFun); //application


//post,get,put,patch,delete




server.get('/',myFun, (req, res) => {
  res.write('Welcome to Express Server');
  res.end();
})

server.get("/login",myFun,(req,res)=>{ 
  res.write('welcome to login page');
  res.end();
})

server.post("/", (req, res) => {
  // res.write('welcome to post Method');
  res.send('<h1>POST METHOD</h1>');
})

// server.put("/", (req, res) => {
//   res.json({ message: 'Hello put method called' })
// })

// server.patch("/", (req, res) => {
//   res.status(400);
//   res.json({ message: 'Hello patch method called' });
// })

// server.get("/user", (req, res) => {
//   res.json(JSON.parse(data));
// })

 

server.listen(5050, () => {
  console.log('server Start at http://localhost:5050');

});

