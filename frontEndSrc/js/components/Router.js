import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import Home from './Home';
import ViewAllPlots from './ViewAllPlots';
import Plot from './Plot';
import PlantingChart from './PlantChart';
import PlantReference from './PlantReference';


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
						<NavLink to="/my-plots" className="nav-item m-2">
							My Plots
						</NavLink>
						<NavLink to="/planting-chart" className="nav-item m-2">
							Planting Chart
						</NavLink>
						<NavLink to="/plant-reference" className="nav-item m-2">
							Reference Guide
						</NavLink>
						<NavLink to="/login" className="nav-item m-2">
							Login
						</NavLink>
					</nav>
					<Route exact path="/" component={Home} />
					<Route path="/my-plots" component={Plot} />
					<Route path="/planting-chart" component={PlantingChart} />
					<Route path="/plant-reference" component={PlantReference} />

				</HashRouter>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<MainRouter />, app);
