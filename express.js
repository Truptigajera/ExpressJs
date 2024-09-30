require('dotenv').config()
const express = require('express');
const app = express();
const morgan = require('morgan');
const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes')
const mongoose = require('mongoose');
const router = require('./routes/cart.routes');
const orderRoutes = require('./routes/order.routes')
const port= process.env.PORT
const uri = process.env.MONGO_URI
const cors = require('cors');

mongoose
    .connect(uri)
    .then(() => console.log(`Database connection successFully...`))
    .catch(err => console.log(err))

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.end("Welcome to Express Server");
})

app.use("/api/product", productRoutes);
app.use('/api/user',userRoutes)
app.use('/api/cart',router)
app.use('/api/order',orderRoutes)

app.listen(port, () => {
    console.log("Own server started");
})