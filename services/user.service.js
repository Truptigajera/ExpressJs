const User = require('../model/user.model');

class UserServices {
    /* ----------Add New User Services------- */

    async addNewUsers(body){
        return await User.create(body);
    }

    /* ----------get All User Services------- */

    async getAllUser(body){
        return await User.find(body);
    }

    /* ----------get User Services------- */
    
    async getUser(userId){
        return await User.findById(userId);
    }

    /* ----------Update User Services------- */

    async UpdateUser(id, body){
        return await User.findByIdAndUpdate(id,{$set: body}, {new: true});
      
    }

    /* ----------Delete User Services------- */

    async deleteUser(body){
        return await User.findByIdAndDelete(body);
    }
    
    
}

module .exports = UserServices;