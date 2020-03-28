import React, { Component } from 'react';
import './Register.css';

class RegisterPage extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			error: ''
		};

		this.handlePassChange = this.handlePassChange.bind(this);
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.dismissError = this.dismissError.bind(this);
	}

	dismissError() {
		this.setState({ error: '' });
	}

	handleSubmit(evt) {
		evt.preventDefault();

		if (!this.state.username) {
			return this.setState({ error: 'Username is required' });
		}

		if (!this.state.password) {
			return this.setState({ error: 'Password is required' });
		}

		return this.setState({ error: '' });
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
				<form action="/api/users" method="POST">
					<div class="form-row">
						<div class="form-group mx-sm-3 mb-2">
							<input
								type="text"
								class="form-control"
								id="inputEmail4"
								placeholder="First Name"
								name="firstName"
							/>
						</div>
						<div class="form-group mx-sm-3 mb-2">
							<input
								type="text"
								class="form-control"
								id="inputPassword4"
								placeholder="Last Name"
								name="lastName"
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
							/>
						</div>
						<div class="form-group col-md-3">
							<input
								type="password"
								class="form-control"
								id="inputPassword4"
								placeholder="Create a password"
								name="password"
							/>
						</div>
						<div class="form-group col-md-3">
							<input
								type="password"
								class="form-control"
								id="inputPassword5"
								placeholder="Re-enter password"
								name="password2"
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

export default RegisterPage;
