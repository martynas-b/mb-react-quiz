import browseStyles from '../css/browse';

import React, { Component } from 'react';

import BrowseItem from './browseItem';
import LoadButton from './loadButton';

class BrowseContainer extends Component {
	
	constructor(props) {
		super(props);
		this.onLoadMoreClick = this.onLoadMoreClick.bind(this);
	}
	
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
	
	onLoadMoreClick () {
		const {items, startIndex, limit} = this.props;
		
		this.props.fetchItemList({
			start: items ? items.length : startIndex,
			limit: limit,
			concat: true
		});
	}
	
	render () {
		const {items} = this.props;
		
		const browseCont = items ? (
			<div>
				<div className={browseStyles.browseOuterContainer}>
					<div className={browseStyles.browseContainer}>
						{items.map((item) => {
							const favorite = this.isFavorite(item.id);
							return <BrowseItem key={`${item.id}|browseItem`} {...item} favorite={favorite} />;
						})}
					</div>
				</div>
				<LoadButton onClick={this.onLoadMoreClick} />
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
}

export default BrowseContainer;