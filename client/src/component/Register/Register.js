import './Register.css';

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class RegisterPage extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			error: '',
			redirectTo: null
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.dismissError = this.dismissError.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	dismissError() {
		this.setState({ error: '' });
	}

	handleSubmit(evt) {
		evt.preventDefault();


    if (this.state.username && this.state.password) {
      this.setState({
        redirectTo: "/login"
      });
    }


		if (!this.state.username) {
			return this.setState({ error: 'Username is required' });
		}

		if (!this.state.password) {
			return this.setState({ error: 'Password is required' });
		}

		this.setState({ error: '' });

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

      console.log("show me this response ", res);

    });
  }



  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="regLeft col-md-8"></div>

            <div className="regRight col-md-4">
              <h2>Join Us Today </h2>

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
                </div>
                <div class="form-row">
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
                <div class="form-row">
                  <div class="form-group mx-sm-3 mb-2">
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      placeholder="Create a username"
                      name="username"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group mx-sm-3 mb-2">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                      name="email"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group mx-sm-3 mb-2">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Create a password"
                      name="password"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group mx-sm-3 mb-2">
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
                <div class="form-row">
                  <div class="form-group mx-sm-3 mb-2">
                    <a role="button" type="submit" class="btn regbtn ">
                      Register
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>


        </div>
      );
    }
  }

}

export default RegisterPage;
