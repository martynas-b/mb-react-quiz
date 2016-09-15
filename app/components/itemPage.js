import React, { Component } from 'react';

import ItemLoadedContainer from '../containers/itemLoadedContainer';

class ItemPage extends Component {
	
	render () {
	
		return (
			<div>
				<ItemLoadedContainer id={this.props.params.id} />
			</div>
		);
	}
}

export default ItemPage;