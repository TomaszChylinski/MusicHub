import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './component/Navigation';
import Login from './component/Login';
import Home from './component/Home';
import Profile from './component/Profile';
import Register from './component/Register';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container-fluid mainContainer">
					<Navigation />
					<Switch>
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/profile" component={Profile} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
