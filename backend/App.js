const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookie = require('cookie-parser');


const {loginRout} = require('./router/loginRouts');
const {productRout} = require('./router/getProductRout');
const mongooseConnect = require('./controller/mongooseCon');
const {privateRout} = require('./router/privateRouts');

app.use(cors()); 
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());  
app.use(cookie());
//mongoose conn
mongooseConnect.mongooseConnect();
mongoose.Promise = global.Promise;
// routs
// const User = require('./models/User');
// app.use('/',(req,res,next)=>{
//     User.deleteMany({}).exec();
//     const data = User.find();
//     console.log(data);
//     next();
// })
app.use('/loginRout',loginRout);
app.use('/productRout',productRout);
app.use('/dummyRout',(req,res,next)=>{
    console.log(req.cookies['auth-token']);
    res.send("ok!!");
})

exports.app = app;