import React, { Component } from "react";
import "./Register.css";


class RegisterPage extends Component {
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

      <div className="register-form">
        <h2>Create Account </h2>
        <form class="form-inline">
          <div class="form-group mb-2">
            <label for="staticEmail2" class="sr-only">
              Last Name
            </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword2"
              placeholder="First Name"
            />
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" class="sr-only">
              First Name
            </label>
            <br/>
            <input
              type="password"
              class="form-control"
              id="inputPassword2"
              placeholder="Last Name"
            />
          </div>
           
          <button type="submit" class="btn btn-primary mb-2">
            Submit
          </button>
        </form>
      </div>




    );
  }
}

export default RegisterPage;
