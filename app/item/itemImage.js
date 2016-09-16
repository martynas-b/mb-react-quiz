import itemStyles from './item';

import React, { Component, PropTypes } from 'react';

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

ItemImage.propTypes = {
	image: PropTypes.string.isRequired
}

export default ItemImage;