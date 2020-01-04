import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="footer">
					<h4 className="footer-text">
						Made with{' '}
						<img
							className="footer-image"
							src={'https://image.flaticon.com/icons/png/512/148/148836.png'}
							alt=""
						/>{' '}
						by Group #4: Jane, Mike, David, & Leo
					</h4>
				</div>
			</React.Fragment>
		);
	}
}
