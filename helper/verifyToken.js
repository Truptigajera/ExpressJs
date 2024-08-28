const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

exports.verifyToken = async (req,res,next)=>{
    try{
        let authorization = req.headers['authorization'];
        if(!authorization)
            return res.json({message:'not authorized'});
        let token = authorization.split(' ')[1];
        let {userId} = await jwt.verify(token,process.env.JWT_SECRET);
        // let user = await User.findOne({_id:userId,isDelete:false})
        if(!userId){
            return res.status(401).json({messae:"unauthorized"});
        }
        let user = await User.findOne({_id:payload.userId,isDelete:false});
        if(!user){
            return res.status(404).json({_id:payload.userId,isDelete:false});
        }
        req.user = user;
        next();
    }catch (err) {
        console.log(err);
        res.status(500).json({message:"Server Error"});
        
    }
};