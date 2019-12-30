const { HashRouter, NavLink, Route } = ReactRouterDOM;
/** the above code is called destructuring it is the same as
 * const HashRouter = ReactRouterDom.HashRouter;
 * const NavLink = ReactRouteDom.NavLink;
 * const Router = ReactRouterDom.Route;
 * */

class MainRouter extends React.Component {
	state = {};
	render() {
		return (
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
				<Route path="/" component={Home} />
			</HashRouter>
		);
	}
}

export default MainRouter;
