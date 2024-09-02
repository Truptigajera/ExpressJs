const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName:String,
    productPrice:{
        type:Number,
    },
    Validity:{
        type:String,
    },
    quntity:{
        type:Number,
    },
    isDelete:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('product',productSchema)