const User = require('../model/user.model');

exports.showRegisterPage = async(req,res)=>{
    try {
        res.render("register.ejs");
    } catch (err) {
        console.log(err);
        res.json({messag: "Server error"});
    }
}

exports.registerUser = async(req,res)=>{
    try {
        let user  = await User.findOne({email: req.body.email});
        // console.log(user);
        
        if(user){
            return res.json({message: "User already register please login"});
        }
        user = await User.create(req.body);
        res.redirect("/api/user/login")
    } catch (err) {
        console.log(err);
        res.json({messag: "Server error"});
    }
}
exports.showLoginPage = async (req, res)=>{
    try {
        res.render("login.ejs");
    } catch (err) {
        console.log(err);
        res.json({messag: "Server error"});
    }
};

exports.loginUser=async(req, res)=>{
    try {
        let user = await User.findOne({email: req.body.email});
        if(!user){
            return res.render("login");
        }
        // console.log(user);
        if(user.password === req.body.password){
            res.redirect("/api/blog")
        }else{
            res.render("login");
        }
    } catch (err) {
        console.log(err);
        res.json({messag: "Server error"}); 
    }
}