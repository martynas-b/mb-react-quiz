import browseStyles from "../css/browse.css";

import React from 'react';

import BrowseItem from './browseItem.js';
import LoadButton from './loadButton.js';

class BrowseContainer extends React.Component {
	
	componentDidMount () {
		var limit = this.props.items ? this.props.items.length : this.props.limit;
		
		this.props.fetchItemList({
			start: this.props.startIndex,
			limit: limit,
			concat: false
		});
	}
	
	render () {
		
		var browseCont = this.props.items ? (
			<div>
				<div className={browseStyles.browseOuterContainer}>
					<div className={browseStyles.browseContainer}>
						{this.props.items.map(function(item) {
							return <BrowseItem key={item.id + '|browseItem'} item={item} />;
						})}
					</div>
				</div>
				<LoadButton onClick={() => this.props.fetchItemList({
					start: this.props.items ? this.props.items.length : this.props.startIndex,
					limit: this.props.limit,
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