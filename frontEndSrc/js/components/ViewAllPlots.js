import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
	
export default class Garden extends Component {
state = {
		plots:[],

	}

	componentDidMount = () => {
		fetch('/api/plots')
			.then(response => response.json())
			.then(plots =>
				this.setState({
					plots: plots
				})
			);
	};

	handleChange = event => {
		this.setState({ [event.target.id]: event.target.value });
	};

	onSubmit = () => {
		return <Redirect to="/my-garden-plot/"
						// state: { currentPlot:[]}
		/> 
	}


	render() {
		return (
			<div>
				<h1>Garden Plots</h1>
				<h5>Click on your plot title to edit or click new plot to 
					add a new plot to your collection!
				</h5>
				<button onClick={this.onSubmit}></button>

			</div>
		);
	}
}
