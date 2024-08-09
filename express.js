const express = require('express')
const server = express() // create server
const morgan = require('morgan');

server.use(morgan('dev'));

//in-builtmiddleware
server.use(express.json());
server.use(express.urlencoded({extended:false}));
server.use("/hello",express.static('public'))


const myFun = (req, res, next) => {
  console.log(req.body);
  next();
}

//server.use(myFun); //application


//post,get,put,patch,delete




server.get('/', (req, res) => {
  res.write('Welcome to Express Server');
  res.end();
});

server.get("/login",myFun,(req,res)=>{ 
  res.write('welcome to login page');
  res.end();
});

server.post("/", (req, res) => {
  // res.write('welcome to post Method');
  res.send('<h1>POST METHOD</h1>');
})

server.listen(5050, () => {
  console.log('server Start at http://localhost:5050');
});

