import itemStyles from '../css/item.css';

import React from 'react';

import ItemHeader from './itemHeader.js';
import ItemImage from './itemImage.js';
import ItemData from './itemData.js';
import ItemDescr from './itemDescr.js';
import FavIconContainer from '../containers/favIconContainer.js';

class ItemContainer extends React.Component {
	
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
				<ItemHeader key={`${item.id}|header`} {...this.props} />
				<div className={itemStyles.itemOuterContainer}>
					<div className={itemStyles.itemContainer}>
						<div className={itemStyles.itemImage}>
							<ItemImage key={`${item.id}|img`} {...this.props} />
							<div className={itemStyles.favIconCont}>
								<FavIconContainer {...this.props} favorite={this.isFavorite()} />
							</div>
						</div>
						<div className={itemStyles.itemData}>
							<ItemData key={`${item.id}|data`} {...this.props} />
						</div>
						<div className={itemStyles.itemDescr}>
							<ItemDescr key={`${item.id}|descr`} {...this.props} />
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

export default ItemContainer;