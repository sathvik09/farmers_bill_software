import React from 'react';
import './App.css';
import Login from './components/login';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './components/Home';
import PrivateRouts from './privateRout';
import FarmerPage from './components/FarmerPage';
import CompanyPage from './components/CompanyPage';


const App = ()=>{

  return(
    <div className="">
      <nav>
        <div className="comp-1">
        <h1 className="title-main">Faryeer</h1>
        <ul className="nav-links">
          <li className="nav-link">Features</li>
          <li className="nav-link">Why Us</li>
          <li className="nav-link">Pricing</li>
        </ul>
        </div>
        <div className="auth">
          <Link style={{textDecoration:'none'}} to='/login'><h3 className='login'>Login</h3></Link>
          <Link style={{textDecoration:'none'}} to='/signup'><h3 className='signup'>Signup</h3></Link>
        </div>
      </nav>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' render={()=>(<Login xyz="fdgs" type='login' />)} />
        <Route path='/signup' render={()=>(<Login type='signup' />)} />
        <Route path='/signout' render={()=>localStorage.clear()} />
        <PrivateRouts path='/farmer' component={FarmerPage} />
        <PrivateRouts path='/company' component={CompanyPage} />
      </Switch>
      </div>
  )
}

export default App;
