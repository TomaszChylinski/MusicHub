import React from "react";
import "./Home.css";

const Home = () => (
  <div class="container">
    <div class="row">
      <div class="home-col col-sm-2">
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

      <div class="home-col col-sm-8">
        <div class="homeForm d-flex p-2">
          <i class="fa fa-user"></i>

          <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
              <label for="userpost" class="sr-only">
                post
              </label>
              <input
                type="post"
                class="form-control input-sm"
                id="addPost"
                placeholder="Add a post"
              />
            </div>
            <button type="submit" class="btn btn-primary mb-2">
              <i class="fa fa-plus"></i>
            </button>
          </form>
        </div>
        <div class="home-timeline">
          Timeline will go here.....

        </div>
      </div>
      <div class="home-col col-sm-2">Recommended</div>
    </div>

    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-8"></div>
      <div class="col-sm-2"></div>
    </div>
  </div>
);

export default Home;
