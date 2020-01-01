import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import Home from './Home';
import Garden from './Garden';
import Plot from './Plot';
import ViewAllPlants from './ViewAllPlants';

class MainRouter extends Component {
	state = {};
	render() {
		return (
			<div>
				<HashRouter>
					<nav className="navbar-light bg-light row">
						<NavLink to="/" className="nav-item m-2">
							Home
						</NavLink>
						<NavLink to="/my-garden" className="nav-item m-2">
							My Garden
						</NavLink>
						<NavLink to="/my-garden-plot" className="nav-item m-2">
							My Garden Plot
						</NavLink>
						<NavLink to="/view-all-plants" className="nav-item m-2">
							View All Plants
						</NavLink>
						<NavLink to="/login" className="nav-item m-2">
							Login
						</NavLink>
					</nav>
					<Route exact path="/" component={Home} />
					<Route path="/my-garden" component={Garden} />
					<Route path="/my-garden-plot" component={Plot} />
					<Route path="/view-all-plants" component={ViewAllPlants} />
				</HashRouter>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<MainRouter />, app);
