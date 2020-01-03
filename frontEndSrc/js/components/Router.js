import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import Home from './Home';
import Plot from './Plot';
import PlantingChart from './PlantChart';
import PlantReference from './PlantReference';
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';
import LogOut from './LogOut';

class MainRouter extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			isLoggedIn: false,
		};
	}
	componentDidMount() {
		if (localStorage.token) {
			this.setState({
				isLoggedIn: true,
			});
		} else {
			this.setState({
				isLoggedIn: false,
			});
		}
	}

	render() {
		return (
			<React.Fragment>
				<HashRouter>
					<header>
						<div className="app-logo">
							<img
								className="logo-icon"
								src={'../img/crops.svg'}
								alt="plot master crop"
							/>
							<a href="/">
								<h1 className="logo-type">Plot Master</h1>
							</a>
						</div>
						<nav className="navbar-light bg-light row">
							<NavLink
								exact
								to="/"
								activeClassName="is-active"
								className="nav-item m-2"
							>
								Home
							</NavLink>
							<NavLink
								to="/my-plots"
								activeClassName="is-active"
								className="nav-item m-2"
							>
								My Plots
							</NavLink>
							<NavLink
								to="/planting-chart"
								activeClassName="is-active"
								className="nav-item m-2"
							>
								Planting Chart
							</NavLink>
							<NavLink
								to="/plant-reference"
								activeClassName="is-active"
								className="nav-item m-2"
							>
								Reference Guide
							</NavLink>
							<NavLink
								to="/login"
								activeClassName="is-active"
								className="nav-item m-2"
							>
								Login
							</NavLink>
						</nav>
					</header>
					<div
						// className={Route.to === '/my-plots' ? '' : 'app-container'}
						className={'site-container'}
					>
						<Route path="/" exact component={Home} />

						<Route path="/planting-chart" component={PlantingChart} />
						<Route path="/plant-reference" component={PlantReference} />
						<Route path="/login" component={LogInForm} />
						<Route path="/signup" component={SignUpForm} />
						<Route path="/logout" component={LogOut} />
					</div>
					<div className="app-container">
						<Route path="/my-plots" component={Plot} />
					</div>
				</HashRouter>
			</React.Fragment>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<MainRouter />, app);
