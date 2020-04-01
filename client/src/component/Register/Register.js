import "./Register.css";

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: "",
      redirectTo: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username && this.state.password) {
      this.setState({
        redirectTo: "/home"
      });
    }

    if (!this.state.username) {
      return this.setState({ error: "Username is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    this.setState({ error: "" });

    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    // api call
    axios({
      method: "post",
      url: "http://localhost:3001/api/users",
      data
    }).then(res => {
      console.log(res);
    });
  }

  handleInputChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="register-form">
          <h2>Create Account </h2>

          <form onSubmit={this.handleSubmit}>
            <div class="form-row">
              <div class="form-group mx-sm-3 mb-2">
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="First Name"
                  name="firstName"
                  onChange={this.handleInputChange}
                />
              </div>
              <div class="form-group mx-sm-3 mb-2">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Create a username"
                name="username"
                onChange={this.handleInputChange}
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleInputChange}
                />
              </div>
              <div class="form-group col-md-3">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Create a password"
                  name="password"
                  onChange={this.handleInputChange}
                />
              </div>
              <div class="form-group col-md-3">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword5"
                  placeholder="Re-enter password"
                  name="password2"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      );
    }
  }
}

export default RegisterPage;
