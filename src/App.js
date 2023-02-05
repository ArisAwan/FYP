//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';
import Registration from './components/Registration';
import Login from './components/login';
import {BrowserRouter as Router,Switch,Route,Redirect,} from "react-router-dom";


function App() {

  //everything inside return is called jsx---> means can write html and js both inside
  return (
    <>
    {/* This is the alias of BrowserRouter i.e. Router */}
    <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" render={() => <Registration userType="new" />} />
            
          {/* This route is for about component 
          with exact path "/signin", in component 
          props we passes the imported component*/}
          <Route path="/signin" component={Login} />
        </Switch>
      </Router>
    {/* <div className='App'>
      <Registration />
    </div> */}
    </>
  );
}

export default App;