import itemStyles from '../css/item';

import React, { Component } from 'react';

class ItemImage extends Component {
	
	shouldComponentUpdate () {
		return false;
	}

	render () {
		
		return (
			<div>
				<img src={this.props.image} />
			</div>
		);
	}
}

export default ItemImage;