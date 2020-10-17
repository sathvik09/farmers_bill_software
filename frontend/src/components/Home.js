import React from 'react';
import phone from '../assets/phone.png';
import path from '../assets/path.png';
import '../App.css';

const Home = ()=>{
    return(
        <div className="body-main">
             <div className="body">
            <img src={phone} alt="" srcset="" />    
        </div>
        <div className="content">
            <div className="img">
            <img src={path} alt="" srcset="" /> 
            </div>
            <div className="content-text">
            <h1>A new way of auctions</h1>  
            </div>   
        </div>  
        </div>
    )
}

export default Home;