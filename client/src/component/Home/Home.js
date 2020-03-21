import React from "react";
import "./Home.css";

const Home = () => (
  <div class="container">
    <div class="row">
      <div class="col-sm-2">
        <ul class="list-group">
          <li>
            <a class="nav-link" href="#">
              <i class="fa fa-user"></i> Tomasz
            </a>
          </li>

          <li>
            <a class="nav-link" href="#">
              <i class="fa fa-home"></i> Home
            </a>
          </li>
          <li>
            <a class="nav-link" href="#">
              <i class="fa fa-child"></i> Profile
            </a>
          </li>
          <li>
            <a class="nav-link" href="https://github.com/TomaszChylinski">
              <i class="fa fa-github"></i> Git
            </a>
          </li>
          <li>
            <a class="nav-link" href="#">
              <i class="fa  fa-users"></i> People
            </a>
          </li>
          <li>
            <a class="nav-link" href="#">
              <i class="fa fa-address-card"></i> About Us
            </a>
          </li>
        </ul>
      </div>
      <div class="col-sm-8"></div>
      <div class="col-sm-2">One of three columns</div>
    </div>

    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-8"></div>
      <div class="col-sm-2"></div>
    </div>
  </div>
);

export default Home;
