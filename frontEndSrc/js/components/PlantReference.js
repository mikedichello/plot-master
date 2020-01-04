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
								<div>
									<h3 className="sub-header">{this.state.currentCrop.name}</h3>
									<img width="300" src={this.state.currentCrop.img} />
								</div>
								<div>
									<p>{this.state.currentCrop.description}</p>
									<p>
										<span>Germinates in</span>
										{this.state.currentCrop.daysToGerminate} days
									</p>
									<p>
										<span>Days to Maturity:</span>
										{this.state.currentCrop.daysToMaturity}
									</p>
									<p>
										<span>Harvesting Tips:</span>
										{this.state.currentCrop.harvest}
									</p>
									<p>
										<span>Thrives best in</span>
										{this.state.currentCrop.sunRequirement}
									</p>
									<ul>
										<span>Companion plants:</span>
										{this.state.currentCrop.companionPlants.map(
											(crop, index) => {
												return <li>{crop}</li>;
											}
										)}
									</ul>
								</div>
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
