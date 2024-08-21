const express = require("express");
const userRoutes = express.Router();
const{
    registerUser, loginUser
}= require("../controller/user.controller");

// userRoutes.get('/',)

userRoutes.post("/register",registerUser);

userRoutes.post("/login",loginUser);

 
 
module.exports = userRoutes;



