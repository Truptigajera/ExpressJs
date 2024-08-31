const User = require("../model/user.model");
const bcrypt = require("bcrypt")
const JsonWebToken = require('jsonwebtoken');
const fs = require("fs").promises;


exports.registerUser = async (req, res) => {
  try {
    let imagePath = "";
    let user = await User.findOne({ email: req.body.email, isDelete: false });
    if (user) {
      return res.json({ message: "User Alreday Exist..." });
    }
    if (req.file) {
      // console.log(req.file);
      imagePath = req.file.path.replace(/\\/g, "/");
    }
    let hashPassword = await bcrypt.hash(req.body.password, 10);
    //   console.log(hashPassword);
    user = await User.create({ ...req.body, password: hashPassword,profileImage:imagePath });
    res.status(201).json({ user, messege: "Register success" })
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" })
  }
};

exports.loginUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email, isDelete: false });
    if (!user) {
      return res.json({ message: 'User Not Found... ' });
    }
    let comparedPassword = await bcrypt.compare(req.body.password, user.password);

    console.log(comparedPassword);
    if (!comparedPassword) {
      return res.json({ message: "Email or password does not match..." });
    }
    let token = await JsonWebToken.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ message: "Login success...", token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};

exports.getProfile = async (req, res) => {
  try {
    res.json(req.user);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" })
  }

};

exports.updateProfile = async (req, res) => {
  try {
    let user = req.user;
    user = await User.findByIdAndUpdate(
      user._id,
      { $set: req.body },
      { new: true }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server Error" });
  }
};

exports.changePassword = async (req, res) => {
  try {
      const { currentpassword, newpassword, confirmpassword } = req.body;
      let user = req.user;
      if (!currentpassword || !newpassword || !confirmpassword) return res.json({ message: 'provide all passwords...' });
      if (newpassword !== confirmpassword) return res.json({ message: 'confirmpassword not matched...' });
      let matchpassword = await bcrypt.compare(currentpassword, user.password);
      if (!matchpassword) return res.status(400).json({ message: 'Incorrect currentpassword...' });
      let hashpasssword = await bcrypt.hash(newpassword, 10);
      user = await User.findByIdAndUpdate(user._id, { $set: { password: hashpasssword } }, { new: true });
      res.status(200).json({ message: 'password changed successfully...' });
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'internal server error...' });
  }
};

// --- hard delete
exports.deleteUser = async (req, res) => {
    try {
      let user = req.user;
        // user = await User.deleteOne({ _id: req.query.id });
        user = await User.findByIdAndDelete(user._id);
        res.status(200).json({ message: 'user deleted successfully...' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

// --- soft delete
// exports.deleteUser = async (req, res) => {
//   try {
//       let user = req.user;
//       user = await User.findByIdAndUpdate(user._id, { $set: { isDelete: true } }, { new: true });
//       res.status(200).json({ message: 'user deleted successfully...' });
//   } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: 'internal server error...' });
//   }
// };

exports.specialUser = async (req,res) => {
  try {
    // let user = {
    //   firstName:"Sachin",
    //   lastName:"Tendulkar",
    //   age:40,
    //   email:"sachin@test.in",
    //   mobileNo:"1234567890",
    //   hobbies:['sport','Music','Dance','Cricket']
    // };

    let user = await User.findOne({firstName:req.query.name, isDelete:false});
    if(!user){
      return res.render('notfound.ejs');
    }
    // res.render('user.ejs', {user});
    res.render('student.hbs', {user});

  } catch (err) {
    console.log(err);
    res.status(500).json({message:"server Error"})    
  }
}

