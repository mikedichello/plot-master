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
				<div className="plant-list-container">
					<div className="plant-list">
						<h3 className="sub-header">Available Plants</h3>
						{this.state.crops.map((crop, index) => {
							return (
								<div
									onClick={() => this.plantDetails(index)}
									className="plant-name-item"
								>
									<p>{crop.name}</p>
								</div>
							);
						})}
					</div>
					<div className="plant-calendar">
						{this.state.currentDetails !== null ? (
							<React.Fragment>
								<div className="months">
									{months.map((month, index) => {
										return <div className="month-single">{month}</div>;
									})}
								</div>
								<div style={{ display: 'flex' }}>
									{months.map((month, index) => {
										return (
											<div
												className={
													this.state.germinate === index
														? 'germinate germinate-active'
														: 'germinate'
												}
											></div>
										);
									})}
								</div>
								<div style={{ display: 'flex' }}>
									{months.map((month, index) => {
										return (
											<div
												className={
													this.state.germinate + 1 <= index &&
													this.state.daysToMaturity >= index
														? 'growth growth-active'
														: 'growth'
												}
											></div>
										);
									})}
								</div>
								<div style={{ display: 'flex' }}>
									{months.map((month, index) => {
										return (
											<div
												className={
													this.state.daysToMaturity + 1 <= index && index <= 8
														? 'harvest harvest-active'
														: 'harvest'
												}
											></div>
										);
									})}
								</div>
								<div className="calendar-key">
									<h3 className="sub-header">Legend</h3>
									<ul>
										<li>
											Germinate ={' '}
											<div className=" legend-square legend-germinate"></div>
										</li>
										<li>
											Growth ={' '}
											<div className=" legend-square legend-growth"></div>
										</li>
										<li>
											Harvest ={' '}
											<div className=" legend-square legend-harvest"></div>
										</li>
									</ul>
								</div>
							</React.Fragment>
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
