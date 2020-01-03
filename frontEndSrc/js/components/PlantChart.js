import React, { Component } from 'react';
import Crops from '../../../public/js/Crops.js'
const months = ['January','February','March','April','May',
			'June','July','August','September','October',
			'November','December']

export default class PlantingChart extends Component{
		state = {
			crops: Crops,
			currentDetails:null,
			germinate:2,
			daysToMaturity:0,
			harvest:0
		}
		plantDetails = (index) => {
			event.preventDefault()
			let crop = Crops[index]
			let daysToMaturity = this.state.germinate+Math.round(crop.daysToMaturity/30)
			let harvest = this.state.germinate+Math.round(crop.daysToMaturity/30)
			this.setState({
				currentDetails:crop,
				daysToMaturity: daysToMaturity,
				harvest:harvest
			})

		}

	render() { 
			return (
				<div>
					<div>Click plant name for details</div>
				

				{this.state.crops.map((crop,index) => {
					return <div onClick={()=> this.plantDetails(index)}>{crop.name}</div>
				})}
				{this.state.currentDetails!==null ?
				<div style={{width:"960px"}}>
					<div style={{width:"960px",display:"flex"}} className="months">
					{months.map((month,index) => {
						return <div style={{width:"80px"}}className={month}>{month}</div>
					})}
					</div>
					<div style={{width:"960px",display:"flex"}}>
					{months.map((month,index) => {
						return <div style={{width:"80px",height:"20px"}}className={(this.state.germinate===index ? "germinate" : '' )}></div>
					})}
					</div>
					<div style={{width:"960px",display:"flex"}}>
					{months.map((month,index) => {
						return <div style={{width:"80px",height:"20px"}}className={(((this.state.germinate+1<=index) && (this.state.daysToMaturity>=index)) ? "growth" : '' )}></div>
					})}
					</div>
					<div style={{width:"960px",display:"flex"}}>
					{months.map((month,index) => {
						return <div style={{width:"80px",height:"20px"}}className={(((this.state.daysToMaturity+1<=index) && (index<=8)) ? "harvest" : '' )}></div>
					})}
					</div>
				</div> : <div></div>}
					
				</div>
				
			)
	}
}
	
