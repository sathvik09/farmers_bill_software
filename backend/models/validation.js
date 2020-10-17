// global imports
const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

//custom imports
const User = require('./User');
const bcrypt = require('bcrypt');

class Validation{
    constructor(param){
        this.param = param;
        const JoiSchema = Joi.object({
            username:Joi.string().min(6).email().required(),
            password: Joi.string().min(6).required()
        })
        this.JoiSchema = JoiSchema;
    }
    validateSignup(){
        const {error} = this.JoiSchema.validate(this.param);
        return error;
    } 
    async CreateUser(){
        const existingUser = await User.find({username:this.param.username}).exec()
        console.log(existingUser);
        if(existingUser.length>0){
            return "user Exists";
        }
        // Hashing the password
        console.log(this.param.password);
        const hashedPassword = await bcrypt.hash(this.param.password,10);
         const user = new User({
             _id: new mongoose.Types.ObjectId,
             username:this.param.username,
             password:hashedPassword,
             userType:"farmer",
         });
         try {
            const savedUser = await user.save();
            return "user Created!";
        } catch (err) {
            return err;
        }
    }
    async validateLogin(){
        const findUser = await User.findOne({username:this.param.username}).exec();
        if(findUser===null){
            return "user does not exist";
        }
        const validPass = await bcrypt.compare(this.param.password,findUser.password);
        if(!validPass){
            return "Invalid Password";
        }
        return findUser;
    }
}

module.exports = Validation;