import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './ViewPosts.css'
import Posts from './components/Posts';


function ViewPosts() {

    //everything inside return is called jsx---> means can write html and js both inside
    return (
      <>
        <Posts />
      </>
    );
  }
  
  export default ViewPosts;