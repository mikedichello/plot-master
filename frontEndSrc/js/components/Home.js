import React, { Component } from 'react';

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<h1 className="page-header">Welcome to Plot Master</h1>
				<div className="home-container">
					<img src={'../img/maskGroup.png'} width="500px" alt="garden beds" />
					<p>
						Plot Master is the ultimate garden design tool for any planting
						space. Create your custom-sized plot, choose your plants, and view a
						chart of suggested planting and harvesting times based on your
						climate. Whether you are an amateur home gardener or a seasoned
						professional, Plot Master will keep your plot organized so you can
						get growing with confidence!
					</p>
				</div>
			</React.Fragment>
		);
	}
}
