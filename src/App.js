//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';
import Registration from './components/Registration';


function App() {

  //everything inside return is called jsx---> means can write html and js both inside
  return (
    <div className='App'>
      <Registration />
    </div>
  );
}

export default App;