import React from 'react';

import './login.css';
import {useSelector,useDispatch} from 'react-redux';
import {userBuilder,passwordBuilder} from '../actions';

// sending requests
import axios from 'axios';


const Login = ({type})=>{
  const userData = useSelector(state=>state.userNameReducer);
  const passData = useSelector(state=>state.passwordReducer);
 const formValidate = async e=>{
    e.preventDefault();
    const data1 = {
      username:userData,
      password:passData
    };
    console.log(data1);
    // req to server
   await axios.post(`http://localhost:5000/loginRout/${type}`,data1)
   .then(response=>{
      const data = response.headers['id']
      if(response.status===400 || data["auth-token"]==="Invalid login/pass"){
        console.log(data["auth-token"]);
      }
      else{
        localStorage.setItem('user',data);        
      }
   })
   .catch(err=>console.log(err));

    dispatch(userBuilder(''));
    dispatch(passwordBuilder(''));
  }
  const dispatch = useDispatch();
    return(
        <div className="">
<div className="pen-title">
  <h1>Material Login Form</h1><span>Pen <i className='fa fa-code'></i> by <a href='http://andytran.me'>Andy Tran</a></span>
</div>
<div className="rerun">Rerun Pen</div>
<div className="container">
  <div className="card"></div>
  <div className="card">
    <h1 className="title">{type}</h1>
    <form>
      <div className="input-container">
        <input onChange={e=>dispatch(userBuilder(e.target.value))} type="#{type}" id="#{label}" required="required" value={userData}  />
        <label>Username</label>
        <div className="bar"></div>
      </div>
      <div className="input-container">
        <input onChange={e=>dispatch(passwordBuilder(e.target.value))} type="#{type}" id="#{label}" required="required" value={passData} />
        <label>Password</label>
        <div className="bar"></div>
      </div>
      <div className="button-container">
        <button onClick={formValidate}><span>Go</span></button>
      </div>
      
    </form>
  </div>
  <div className="card alt">
    <div className="toggle"></div>
    <h1 className="title">Register
      <div className="close"></div>
    </h1>
    <form>
      <div className="input-container">
        <input type="#{type}" id="#{label}" required="required"/>
        <label>Username</label>
        <div className="bar"></div>
      </div>
      <div className="input-container">
        <input type="#{type}" id="#{label}" required="required"/>
        <label>Password</label>
        <div className="bar"></div>
      </div>
      <div className="input-container">
        <input type="#{type}" id="#{label}" required="required"/>
        <label>Repeat Password</label>
        <div className="bar"></div>
      </div>
      <div className="button-container">
        <button><span>Next</span></button>
      </div>
    </form>
  </div>
</div>
</div>

  )
}
  
export default Login;
