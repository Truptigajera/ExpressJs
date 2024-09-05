const Product = require('../model/product.model');

class ProductServices {

    /* ----------Add New Product Services------- */

    async addNewProduct(body) {
        return await Product.create(body);
    };

    /* ----------get Product Services------- */
    async getProduct(body) {
       try {
        return await Product.findOne(body);
       } catch (err) {
        console.log(err);
        return err;
        
       }
    };

    /* ----------get All Product Services------- */
    async getAllProducts(body) {
        return await Product.find(body);
    };

    /* ----------update Product Services------- */
    async UpdateProduct(body){
        return await Product.findByIdAndUpdate(id,{$set:body},{new:true});
    }


};

module.exports = ProductServices;

//add, get ,getAll,update