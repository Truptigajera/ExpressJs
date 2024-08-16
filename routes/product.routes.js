const express = require("express");
const productRoutes = express.Router();
const{
    addNewproduct,
    getAllproduct,
    getproduct,
    replaceproduct,
    updateproduct,
    deleteproduct

}= require("../controller/product.controller");

productRoutes.post("/",addNewproduct);

productRoutes.get("/",getAllproduct);

productRoutes.get("/get-product",getproduct);

// productRoutes.put("/:id",replaceproduct);

// productRoutes.patch("/:id",updateproduct);

// productRoutes.delete("/:id",deleteproduct);

module.exports = productRoutes;



