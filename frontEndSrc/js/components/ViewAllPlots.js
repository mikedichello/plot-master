import React, { Component } from 'react';
import {withRouter,Redirect} from 'react-router-dom';
	
export default class ViewAllPlots extends Component {
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
		 <Redirect to={{
             pathname: "/my-garden-plot",
						state: { currentPlot:[]}
    }}/> 
	}

	// onButtonClick(){
	// 	let { history } = this.props;
	// 	history.push({
	// 	 pathname: '/my-garden-plot',
	// 	 state:{
	// 		 currentPlot: []
	// 	 }
	// 	});
	//    }


	render() {
		return (
			<div>
				<h1>Garden Plots</h1>
				<h5>Click on your plot title to edit or click new plot to 
					add a new plot to your collection!
				</h5>
				<ul>
				{this.state.plots.map((plot,index) => {
					return <li>{plot.title}</li>
				}
				)}
				</ul>
				<button onClick={this.onButtonClick.bind(this)} >
					New Plot
				</button>

			</div>
		);
	}
}
