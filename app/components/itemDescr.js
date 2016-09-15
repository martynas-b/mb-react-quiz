import itemStyles from '../css/item';

import React, { Component } from 'react';

class ItemDescr extends Component {
	
	shouldComponentUpdate () {
		return false;
	}
	
	render () {
		
		const {description, creators} = this.props;
		
		return (
			<div className={itemStyles.textWrapper}>
				{description}
				<div style={{marginTop: 20}}><span className={itemStyles.header3}>Creator: </span>{creators}</div>
			</div>
		);
	}
}

export default ItemDescr;