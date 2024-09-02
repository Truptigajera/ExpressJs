const express = require("express");
const cartRoutes = express.Router();
const{
    addtoCart,
    getAllCarts,
    updateCart 
}=require("../controller/carts.controller");

const{verifyToken}=require('../helper/verifyToken');

cartRoutes.post("/",verifyToken,addtoCart);
cartRoutes.get("/",verifyToken,getAllCarts);
cartRoutes.put("/",verifyToken,updateCart);




module.exports=cartRoutes;