import globalStyles from './global';
import React, { Component, PropTypes } from 'react';

class PageCont extends Component {

	render () {
		return (
			<div className={globalStyles.content}>
				{this.props.children}
			</div>
		);
	}
}

PageCont.propTypes = {
    children: PropTypes.node
}

export default PageCont;