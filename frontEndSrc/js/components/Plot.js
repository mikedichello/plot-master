import React, { Component } from 'react';
import Crops from '../../../public/js/Crops.js';

export default class Plot extends Component {
	state = {
		plots: [],
		height: 0,
		width: 0,
		currentSubplot: [],
		currentSubplotId: [],
		currentPlotId: [],
		currentPlot: [],
		title: 'title',
		plotBackground: 'brown',
	};
	componentDidMount = () => {
		fetch('/api/plots')
			.then(response => response.json())
			.then(plots =>
				this.setState({
					plots: plots,
				})
			);
	};

	handleChange = event => {
		this.setState({ [event.target.id]: event.target.value });
	};

	plantSelection = event => {
		event.preventDefault();
		let plot = this.state.plots[this.state.currentPlotId];
		console.log(plot);

		// Refactor this to work with the incoming plant from the Crops data ?
		// Find a way to grab the icon from the current target. and into the plant icont, in the subplot
		// Might not be able to do the background color

		plot.subPlot[this.state.currentSubplotId].plantName =
			event.target.style.backgroundColor;
		fetch('/api/plots/' + plot._id, {
			body: JSON.stringify({ subPlot: plot.subPlot }),
			method: 'PUT',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
		})
			.then(updatedPlot => updatedPlot.json())
			.then(jsonedPlot => {
				fetch('/api/plots/')
					.then(response => response.json())
					.then(plots => {
						this.setState({
							plots: plots,
							currentSubplot: [],
							currentPlotId: [],
							currentSubplotId: [],
						});
					});
			});
	};

	plotSelection = event => {
		event.preventDefault();
		console.log(event.target.id);
		console.log(this.state.currentSubplot);

		this.setState({
			currentSubplot: event.target,
			currentSubplotId: event.target.id,
		});
	};

	bigPlot = index => {
		this.setState({
			currentPlotId: index,
		});
	};

	deletePlot = (id, index) => {
		fetch('/api/plots/' + id, {
			method: 'DELETE',
		}).then(data => {
			this.setState({
				plots: [
					...this.state.plots.slice(0, index),
					...this.state.plots.slice(index + 1),
				],
			});
		});
	};
	newPlot = event => {
		event.preventDefault();
		let subPlots = [];
		for (let i = 0; i < this.state.height * this.state.width; i++) {
			subPlots.push({
				key: i,
				height: '50px',
				width: '50px',
				plantName: null,
				plantDescription: null,
				harvestTime: null,
				plantingTime: null,
			});
		}
		fetch('/api/plots', {
			body: JSON.stringify({
				height: this.state.height,
				width: this.state.width,
				title: this.state.title,
				subPlot: subPlots,
			}),
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
		})
			.then(createdPlot => {
				return createdPlot.json();
			})
			.then(jsonedPlot => {
				this.setState({
					height: 0,
					width: 0,
					title: 'title',
					plots: [...this.state.plots, jsonedPlot],
				});
			});
	};
	render() {
		return (
			<React.Fragment>
				<h2 className="page-header" style={{ textAlign: 'center' }}>
					My Plot App
				</h2>
				<h3 className="sub-header" style={{ textAlign: 'center' }}>
					Create A New Plot
				</h3>
				<form className="create-new-form" onSubmit={this.newPlot}>
					<p>Enter height and width in feet</p>
					<span>
						<input
							className="basic-slide"
							type="number"
							value={this.state.height}
							onChange={this.handleChange}
							id="height"
						/>
						<label htmlFor="height">Height</label>
					</span>
					<span>
						<input
							className="basic-slide"
							type="number"
							value={this.state.width}
							onChange={this.handleChange}
							id="width"
						/>
						<label htmlFor="width">Width</label>
					</span>
					<span>
						<input
							className="basic-slide"
							type="text"
							value={this.state.title}
							onChange={this.handleChange}
							id="title"
						/>
						<label>Title</label>
					</span>
					<input type="submit" />
				</form>
				<hr />
				<h3 className="sub-header">Saved Plots</h3>
				{this.state.plots.map((plot, index) => {
					return (
						<React.Fragment>
							<div className="plot-container">
								<div
									className="plot"
									onClick={() => this.bigPlot(index)}
									id={index}
									style={{
										width: plot.width * 50,
										display: 'flex',
										flexWrap: 'wrap',
									}}
								>
									{plot.subPlot.map((subplot, index) => {
										return (
											<div
												key={index}
												className="subplot"
												onClick={
													this.state.currentSubplot.length === 0
														? this.plotSelection
														: this.plantSelection
												}
												id={subplot.key}
												style={{
													width: subplot.width,
													height: subplot.height,
												}}
											></div>
										);
									})}
								</div>
								<div className="plot-info">
									<h4 className="sub-header">{plot.title}</h4>
									<button
										className="delete-btn"
										onClick={() => this.deletePlot(plot._id, index)}
									>
										Delete
									</button>
								</div>
							</div>
							{/* <div
								onClick={this.plantSelection}
								style={{
									width: '50px',
									height: '50px',
									backgroundColor: 'yellow',
								}}
							></div> */}
							<div className="available-plant-list">
								{Crops.map((crop, index) => {
									return (
										// Add the onClick event somewhere in here, it will take the iron url, and set it to the background-image in the plot, but store the plant's data somewhere else as well?
										<div className="select-crop" key={index}>
											<img src={crop.icon} />
											<p>{crop.name}</p>
										</div>
									);
								})}
							</div>
							<div className="plantInfo"></div>
							<hr />
						</React.Fragment>
					);
				})}
			</React.Fragment>
		);
	}
}
