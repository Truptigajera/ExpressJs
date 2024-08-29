const express = require("express");
const userRoutes = express.Router();
const {
    registerUser,
    loginUser,
    getProfile,
    updateProfile,
    changePassword,
    deleteUser,
     specialUser
} = require("../controller/user.controller");
const { verifyToken } = require('../helper/verifyToken');
const {upload}=require("../helper/imageUpload")

userRoutes.post("/register", upload.single('profileImage'), registerUser);
userRoutes.post("/login", loginUser);
userRoutes.get('/me', verifyToken, getProfile);
userRoutes.put("/update-profile",verifyToken,updateProfile);
userRoutes.post('/changepassword', verifyToken, changePassword);
userRoutes.delete('/deleteuser', verifyToken, deleteUser);
// userRoutes.post("/reg",specialUser);
module.exports = userRoutes;



