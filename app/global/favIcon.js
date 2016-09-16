import globalStyles from './global';
import React, { Component, PropTypes } from 'react';

class FavIcon extends Component {
	
	constructor(props) {
		super(props);
		this.onFavIconClick = this.onFavIconClick.bind(this);
	}
	
	onFavIconClick () {
		const {id, favorite} = this.props;
		
		this.props.setFavoriteItem({
			id: id,
			favorite: !favorite
		});
	}

	render () {
		const heartSrc = this.props.favorite ? '/img/heart_24.png' : '/img/heart_empty_24.png';
		
		return (
			<div>
				<img onClick={this.onFavIconClick} className={globalStyles.favoriteIcon} src={heartSrc} />			
			</div>
		);
	}
}

FavIcon.propTypes = {
	id: PropTypes.string.isRequired,
	favorite: PropTypes.bool.isRequired,
	setFavoriteItem: PropTypes.func.isRequired
}

export default FavIcon;