import React, { Component, PropTypes } from 'react';

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

ItemPage.propTypes = {
	params: React.PropTypes.shape({
		id: React.PropTypes.string.isRequired
	})
}

export default ItemPage;