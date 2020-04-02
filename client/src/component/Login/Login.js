import './Login.css';

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			error: '',
			isLoggedIn: false,
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

		if (!this.state.username && this.state.password) {
			this.setState({
				redirectTo: '/home'
			});
		}

		this.setState({ error: '' });

		const data = {
			email: this.state.email,
			password: this.state.password
		};

		// api call
		axios({
			method: 'post',
			url: '/api/login',
			data
		}).then(res => {
			// handle unautorized response
			// redirect to home/main whatever
			this.setState({ isLoggedIn: true });
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
				<form onSubmit={this.handleSubmit}>
					<ul>
						<li>
							<input
								type="email"
								class="form-control"
								id="inputPassword2"
								placeholder="Email"
								name="email"
								onChange={this.handleInputChange}
							/>
						</li>
						<li>
							<input
								type="password"
								class="form-control"
								id="inputPassword2"
								placeholder="Password"
								name="password"
								onChange={this.handleInputChange}
							/>
						</li>
						<li>
							<button type="submit" class="btn btn-submit mb-2">
								Submit
							</button>
						</li>
					</ul>
				</form>
			);
		}
	}
}

export default Login;
