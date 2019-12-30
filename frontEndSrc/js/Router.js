import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import App from './components/App';

class MainRouter extends React.Component {
	state = {};
	render() {
		return (
			<div>
				<HashRouter>
					Hello Router!
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
						<NavLink to="/plant-listing" className="nav-item m-2">
							Plant Listing
						</NavLink>
						<NavLink to="/login" className="nav-item m-2">
							Login
						</NavLink>
					</nav>
					<Route path="/" component={App} />
				</HashRouter>
			</div>
		);
	}
}

export default MainRouter;
