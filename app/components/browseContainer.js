import browseStyles from '../css/browse.css';

import React from 'react';

import BrowseItem from './browseItem.js';
import LoadButton from './loadButton.js';

class BrowseContainer extends React.Component {
	/*
	constructor(props) {
		super(props);
		this.isFavorite = this.isFavorite.bind(this);
	}
	*/
	componentDidMount () {
		this.props.getFavoriteItems();
		
		const {items, startIndex, limit} = this.props;
		
		const currentLimit = items ? items.length : limit;
		
		this.props.fetchItemList({
			start: startIndex,
			limit: currentLimit,
			concat: false
		});
	}
	
	isFavorite (itemId) {
		const {favItems} = this.props;
		return favItems.hasOwnProperty(itemId) ? favItems[itemId] : false;
	}
	
	render () {
		
		const {items, startIndex, limit} = this.props;
		
		const browseCont = items ? (
			<div>
				<div className={browseStyles.browseOuterContainer}>
					<div className={browseStyles.browseContainer}>
						{items.map(function(item) {
							const favorite = this.isFavorite(item.id);
							return <BrowseItem key={`${item.id}|browseItem`} item={item} favorite={favorite} />;
						}, this)}
					</div>
				</div>
				<LoadButton onClick={() => this.props.fetchItemList({
					start: items ? items.length : startIndex,
					limit: limit,
					concat: true
				})} />
			</div>
		) : '';
		
		return (
			<div>
				{browseCont}
			</div>
		);
	}
}

BrowseContainer.defaultProps = {
	startIndex: 0,
	limit: 9
};

export default BrowseContainer;