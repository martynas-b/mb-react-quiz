import globalStyles from '../css/global.css';
import React from 'react';

class FavIcon extends React.Component {

	render () {

		const {item, favorite} = this.props;
	
		const heartSrc = favorite ? '/img/heart_24.png' : '/img/heart_empty_24.png';
		
		return (
			<div>
				<img onClick={() => this.props.setFavoriteItem({
					id: item.id,
					favorite: !favorite
				})} className={globalStyles.favoriteIcon} src={heartSrc} />			
			</div>
		);
	}
}

export default FavIcon;