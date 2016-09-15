import browseStyles from '../css/browse';

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Price from './price';
import FavIconContainer from '../containers/favIconContainer';

class BrowseItem extends Component {
	
	shouldComponentUpdate (nextProps) {
		return nextProps.favorite !== this.props.favorite;
	}
	
	render () {
		
		const {id, image, price} = this.props;
		
		return (
			<div className={browseStyles.browseItem}>
				<div className={browseStyles.browseItemImage}>
					<Link to={`/item/${id}`}>
			 			<img src={image} />
			 		</Link>
		 		</div>
		 		<div className={browseStyles.browseItemPrice}>
		 			<Price price={price} />
		 		</div>
		 		<div className={browseStyles.browseItemFav}>
		 			<FavIconContainer {...this.props} />
		 		</div>
			</div>
		);
	}
}

BrowseItem.propTypes = {
	id: PropTypes.string.isRequired,
	image: PropTypes.string,
	price: PropTypes.object,
	favorite: PropTypes.bool.isRequired
}

export default BrowseItem;