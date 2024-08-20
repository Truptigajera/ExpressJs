const express = require("express");
const productRoutes = express.Router();
const{
    addNewproduct,
    getAllproduct,
    getproduct,
    updateproduct,
    deleteproduct

}= require("../controller/product.controller");

productRoutes.post("/",addNewproduct);

productRoutes.get("/",getAllproduct);

productRoutes.get("/get-product",getproduct);

productRoutes.put("/",updateproduct);

productRoutes.delete("/",deleteproduct);

module.exports = productRoutes;



