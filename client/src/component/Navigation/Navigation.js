import React from "react";
import "./Navigation.css";
import Login from "../Login"

const Navigation = () => (

  <header>
    <nav className="navbar-expand-lg">
      <div className="navbar container">
        <div className="row">
          <div className="col-md-2">
            <a href="./home" className="navbar-brand mb-1 h1">MusicHub</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="collapse navbar-collapse" id="">
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">  
                   <Login/>
                </li>
         
        
                <div className="row">
          <div className="col-md-1"></div>
        </div>
         
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  );


export default Navigation;
