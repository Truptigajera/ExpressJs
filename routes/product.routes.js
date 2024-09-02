const express = require('express')
const productRoutes = express();

const { addNewProduct,getAllproduct,deleteproduct } = require('../controller/product.controller')
// const {
//     addNewProduct,
//     getAllProducts,
//     getProduct,
//     replaceProduct,
//     upateProduct,
//     deletePreoduct
// } = require('../controller/product.controller');

// Add New Product - Create
productRoutes.post('/addproduct', addNewProduct)

// Get All Products - Read
productRoutes.get('/',getAllproduct)

// Get Single Product - Read
// productRoutes.get('/',getProduct)

// Replace Data - PUT
// productRoutes.put('/:id',replaceProduct)

// Update Data - PATCH
// productRoutes.patch('/get-product',UpdateProduct)

// Delete Data - DELETE
productRoutes.delete('/delete',deleteproduct)

module.exports = productRoutes;