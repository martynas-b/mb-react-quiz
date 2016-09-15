import globalStyles from '../css/global';
import React, { Component } from 'react';

class PageCont extends Component {

	render () {
		return (
			<div className={globalStyles.content}>
				{this.props.children}
			</div>
		);
	}
}

export default PageCont;