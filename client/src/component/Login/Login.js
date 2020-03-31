import React, { Component } from "react";
import "./Login.css";
import RegisterPage from "../Register";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: ""
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: "Username is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    return this.setState({ error: "" });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div className="container">
        <div className="login-form">
          <form className="form-inline">
            <div className="form-group mb-2">
              <label for="staticEmail2" className="sr-only">
                Email
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder="User Name"
              />
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <label for="inputPassword2" className="sr-only">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
              Submit
            </button>
          </form>

          <RegisterPage/>
        </div>
     
      </div>
            
    );
  }
}

export default Login;
