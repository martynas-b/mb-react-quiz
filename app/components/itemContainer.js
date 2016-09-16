import itemStyles from '../css/item';

import React, { Component, PropTypes } from 'react';

import ItemHeader from './itemHeader';
import ItemImage from './itemImage';
import ItemData from './itemData';
import ItemDescr from './itemDescr';
import FavIconContainer from '../containers/favIconContainer';

class ItemContainer extends Component {
	
	componentDidMount () {
		this.props.getFavoriteItems();
		this.props.fetchItem(this.props.id);
	}
	
	isFavorite () {
		const { favItems, item } = this.props;
		return favItems.hasOwnProperty(item.id) ? favItems[item.id] : false;
	}
	
	render () {
		
		const {item} = this.props;
		
		const itemCont = item ? (
			<div>
				<ItemHeader key={`${item.id}|header`} {...item} />
				<div className={itemStyles.itemOuterContainer}>
					<div className={itemStyles.itemContainer}>
						<div className={itemStyles.itemImage}>
							<ItemImage key={`${item.id}|img`} {...item} />
							<div className={itemStyles.favIconCont}>
								<FavIconContainer {...item} favorite={this.isFavorite()} />
							</div>
						</div>
						<div className={itemStyles.itemData}>
							<ItemData key={`${item.id}|data`} {...item} />
						</div>
						<div className={itemStyles.itemDescr}>
							<ItemDescr key={`${item.id}|descr`} {...item} />
						</div>
					</div>
				</div>
			</div>
		) : '';
		
		return (
			<div>
				{itemCont}
			</div>
		);
	}
}

ItemContainer.propTypes = {
	id: PropTypes.string.isRequired,
	item: PropTypes.object,
	favItems: PropTypes.object
}

export default ItemContainer;