const jwt = require('jsonwebtoken');
const credential = require('../credentials.json');
const User = require('../models/User');

const privateRout = (req,res,next)=>{
    const token = User.findOne({username:"sathvikparthasarathy@gmail.com"}).select("token").exec();
    if(!token)return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token,credential.TOKEN_SECRET);
        req.user = verified;
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
    next();
}

exports.private = privateRout;