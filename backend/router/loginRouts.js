const express = require('express');
const router = express.Router();

//defined handlers
const {LoginHandler,SignupHandler} = require('../controller/loginController');

//routs
router.post('/login',LoginHandler);
router.post('/signup',SignupHandler);


//export
exports.loginRout = router;