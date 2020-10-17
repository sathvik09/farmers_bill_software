const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

//custom imports
const Validation = require('../models/validation');
const credential = require('../credentials.json');
const User = require('../models/User');

exports.LoginHandler = async (req,res,next)=>{
    const validationObject = new Validation(req.body);
   const error =  validationObject.validateSignup();
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    // checking db for record
    let userFound = await validationObject.validateLogin();
    if(userFound==="user does not exist" || userFound==="Invalid Password"){
        return res
    .header('Access-Control-Expose-Headers', 'auth-token')
    .header('auth-token', "Invalid login/pass")
    .json({ message: 'invalid'})
        
    }
    // create token
    const token = jwt.sign({_id:userFound._id},credential.TOKEN_SECRET);
    res.cookie('auth-token', token, { expires: new Date(Date.now() + 300000), httpOnly: true });

    res
    .header('Access-Control-Expose-Headers', 'id')
    .header('id', userFound._id)
   // .header('auth-token', token)
    .json("loged in")


}

exports.SignupHandler = async(req,res,next)=>{
    //validate data
    const validationObject = new Validation(req.body);
   const error =  validationObject.validateSignup();
   if(error){
       return res.send(error.details[0].message);
   }
   // creating the new user...
   const response = await validationObject.CreateUser();
   if(response==="user Created!"){
       return res.send(response);
   }
   res.status(400).send(response);
}