import './Login.css';

import React, { Component } from 'react';

import axios from 'axios';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			error: ''
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

		if (!this.state.email) {
			return this.setState({ error: 'Email is required' });
		}

		if (!this.state.password) {
			return this.setState({ error: 'Password is required' });
		}

		this.setState({ error: '' });

		const data = {
			email: this.state.email,
			password: this.state.password
		};

		// api call
		axios({
			method: 'post',
			url: 'http://localhost:3001/api/login',
			data
		}).then(res => {
			// handle unautorized response
			// redirect to home/main whatever
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

		return (
			<div className="container">
				<div className="login-form">
					<form onSubmit={this.handleSubmit}>
						<div class="form-group mb-2">
							<label for="staticEmail2" class="sr-only">
								Email
							</label>
							<input
								type="email"
								class="form-control"
								id="inputPassword2"
								placeholder="Email"
								name="email"
								onChange={this.handleInputChange}
							/>
						</div>
						<div class="form-group mx-sm-3 mb-2">
							<label for="inputPassword2" class="sr-only">
								Password
							</label>
							<input
								type="password"
								class="form-control"
								id="inputPassword2"
								placeholder="Password"
								name="password"
								onChange={this.handleInputChange}
							/>
						</div>
						<button type="submit" class="btn btn-primary mb-2">
							Submit
						</button>
					</form>

					{/* <RegisterPage /> */}
				</div>
			</div>
		);
	}
}

export default Login;
