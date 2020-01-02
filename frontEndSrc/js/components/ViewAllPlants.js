import React, { Component } from 'react';

export default class ViewAllPlants extends Component {
	state = {
		allCrops: Crops,
		currentCrop: {}
	}


	render() {
		return (
			<div>
				<h1>View All Plants</h1>
				<ul>
					{this.state.allCrops.map((crop, index) => {
						return(
							<li  onClick={() => this.setState({currentCrop: crop})}>{crop.name}</li>
						)
					})}
				</ul>
			</div>
		);
	}
}
