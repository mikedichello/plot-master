import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from '../Router';
import Home from './Home';

class App extends React.Component {
	render() {
		return (
			<div>
				<MainRouter />
				<Home />
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
