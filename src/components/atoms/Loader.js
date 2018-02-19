/*----------------------
    LOADER COMPONENT:
    display a gif of a wheel when pages are loading slowly
------------------------*/

import React, { Component } from 'react';
import '../../stylesheets/main.css'; 
import loader from "../../images/loader.gif";


const Loader = () => (
  <div className="text-center">
    <img className="loader" src={loader} alt="Loading..."/>
  </div>
 );

 export default Loader