import React, { Component } from 'react';
import Crops from '../../../public/js/Crops.js';

export default class PlantReference extends Component {
	state = {
		allCrops: Crops,
		currentCrop: {
			name: 'CLICK CROP TO VIEW INFORMATION',
			companionPlants: [],
		},
		showDetails: null,
	};

	render() {
		return (
			<React.Fragment>
				<h2 className="page-header">View All Plants</h2>
				<div className="plants-wrapper">
					<div className="reference-plant-list">
						{this.state.allCrops.map((crop, index) => {
							return (
								<div
									key={index}
									className="single-plant"
									onClick={() =>
										this.setState({ currentCrop: crop, showDetails: true })
									}
								>
									<p> {crop.name}</p>
									<img src={crop.icon} />
								</div>
							);
						})}
					</div>
					<div className="crop-information">
						{this.state.showDetails !== null ? (
							<React.Fragment>
								<h3 className="sub-header">{this.state.currentCrop.name}</h3>
								<img width="300" src={this.state.currentCrop.img} />
								<h2>{this.state.currentCrop.description}</h2>
								<h3>
									Germinates in {this.state.currentCrop.daysToGerminate} days
								</h3>
								<h3>
									Days to Maturity: {this.state.currentCrop.daysToMaturity}
								</h3>
								<h3>Harvesting Tips: {this.state.currentCrop.harvest}</h3>
								<h3>Thrives best in {this.state.currentCrop.sunRequirement}</h3>
								<ul>
									Companion plants:
									{this.state.currentCrop.companionPlants.map((crop, index) => {
										return <li>{crop}</li>;
									})}
								</ul>
							</React.Fragment>
						) : (
							<h3 className="sub-header">{this.state.currentCrop.name}</h3>
						)}
					</div>
				</div>
			</React.Fragment>
		);
	}
}
