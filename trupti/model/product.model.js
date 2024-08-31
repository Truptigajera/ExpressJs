const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName:String,
    productPrice:{
        type:Number,
    },
    Validity:{
        type:String,
    },
    Quntity:{
        type:Number,
    },
    isDelete:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('product',productSchema)