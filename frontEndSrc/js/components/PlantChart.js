import React, { Component } from 'react';
import axios from 'axios'

class PlantChart extends Component{
	constructor (props) {
		super(props)
		this.state = {
			plants: [],
			viewMode: false,
			currentPlant: null
		}
	}

	//import data from seed file instead

	componentDidMount () {
		axios.get('http://localhost:3000/api/plants')
		.then(response => {
			this.setState({
				plants: response.data
			})
		})
	}

	viewPlantDetails = (plant, event) => {
		this.setState({
			viewMode: !this.state.viewMode,
			currentPlant: event.target
		})
	}

	render() { 
			return (
				<div className = 'chartContainer'>
					<h2>My Plant Chart</h2>
					{/* get rid of this */}
					{this.state.viewMode} ? 
						<h3>{this.state.currentPlant}</h3>
						<ul>
							<li>Description: {this.state.currentPlant.description}</li>
							<li>When to Plant Indoors: {this.state.currentPlant.plantIndoors}</li>
							<li>Days to Germination: {this.state.currentPlant.daysToGerminate}</li>
							<li>When to Transplant Outdoors: {this.state.currentPlant.transplantDate}</li>
							<li>Days to Maturity: {this.state.currentPlant.daysToMaturity}</li>
							<li>Harvest Date: {this.state.currentPlant.harvestDate}</li>
							<li>Sun Requirements: {this.state.currentPlant.sunRequirement}</li>
							<li>Spacing Recommendation: {this.state.currentPlant.spacing} inches</li>
							<li>Recommended Companion Plants: {this.state.currentPlant.companionPlants.map((plant, i) => {
								return(<p>{plant}</p>)
							})}</li>
							<li>Type: {this.state.currentPlant.perennial ? 'Perennial' : 'Annual'}</li>
						</ul>
					:
					<table>
						<tr>
							<th>Plant Name</th>
							<th>January</th>
							<th>February</th>
							<th>March</th>
							<th>April</th>
							<th>May</th>
							<th>June</th>
							<th>July</th>
							<th>August</th>
							<th>September</th>
							<th>October</th>
							<th>November</th>
							<th>December</th>
						</tr>
					{this.state.plants.map((plant, i) => {
						return(
							<tr>
								<td onClick={this.viewPlantDetails}>{plant.name}</td>
								<td className={plant.name} January></td>
								<td className={plant.name} February></td>
								<td className={plant.name} March></td>
								<td className={plant.name} April></td>
								<td className={plant.name} May></td>
								<td className={plant.name} June></td>
								<td className={plant.name} July></td>
								<td className={plant.name} August></td>
								<td className={plant.name} September></td>
								<td className={plant.name} October></td>
								<td className={plant.name} November></td>
								<td className={plant.name} December></td>
							</tr>
						)
					}
					)}
					</table>
				</div>
			)
	}
}

export default PlantChart