import React, { Component } from 'react';
import Crops from '../../../public/js/Crops.js'

export default class PlantingChart extends Component{
		state = {
			allPlants: Crops,
		}

	render() { 
			return (
				<div className = 'chartContainer'>
					<h2>My Plant Chart</h2>
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
					{this.state.allPlants.map((plant, i) => {
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