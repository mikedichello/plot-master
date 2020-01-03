import React, { Component } from 'react';
import Crops from '../../../public/js/Crops.js';
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export default class PlantingChart extends Component {
	state = {
		crops: Crops,
		currentDetails: null,
		germinate: 2,
		daysToMaturity: 0,
		harvest: 0,
	};
	plantDetails = index => {
		event.preventDefault();
		let crop = Crops[index];
		let daysToMaturity =
			this.state.germinate + Math.round(crop.daysToMaturity / 30);
		let harvest = this.state.germinate + Math.round(crop.daysToMaturity / 30);
		this.setState({
			currentDetails: crop,
			daysToMaturity: daysToMaturity,
			harvest: harvest,
		});
	};

	render() {
		return (
			<React.Fragment>
				<h2 className="page-header" style={{ textAlign: 'center' }}>
					Planting Chart
				</h2>
				<h3 className="sub-header" style={{ textAlign: 'center' }}>
					Click plant name for details
				</h3>
				<div>
					<div className="plant-list">
						{this.state.crops.map((crop, index) => {
							return (
								<div onClick={() => this.plantDetails(index)}>{crop.name}</div>
							);
						})}
					</div>
					<div className="plant-calendar">
						{this.state.currentDetails !== null ? (
							<div>
								<div style={{ display: 'flex' }} className="months">
									{months.map((month, index) => {
										return <div className={month}>{month}</div>;
									})}
								</div>
								<div style={{ display: 'flex' }}>
									{months.map((month, index) => {
										return (
											<div
												style={{ height: '20px' }}
												className={
													this.state.germinate === index ? 'germinate' : ''
												}
											></div>
										);
									})}
								</div>
								<div style={{ display: 'flex' }}>
									{months.map((month, index) => {
										return (
											<div
												style={{ height: '20px' }}
												className={
													this.state.germinate + 1 <= index &&
													this.state.daysToMaturity >= index
														? 'growth'
														: ''
												}
											></div>
										);
									})}
								</div>
								<div style={{ display: 'flex' }}>
									{months.map((month, index) => {
										return (
											<div
												style={{ height: '20px' }}
												className={
													this.state.daysToMaturity + 1 <= index && index <= 8
														? 'harvest'
														: ''
												}
											></div>
										);
									})}
								</div>
							</div>
						) : (
							<div>
								<h3 className="sub-header">Select a plant</h3>
							</div>
						)}
					</div>
				</div>
			</React.Fragment>
		);
	}
}
