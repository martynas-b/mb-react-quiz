import itemStyles from '../css/item.css';

import React from 'react';
import { Link } from 'react-router';

class ItemHeader extends React.Component {
	
	shouldComponentUpdate () {
		return false;
	}
	
	render () {
		
		const {item} = this.props;
		
		const link = (
			<div className={itemStyles.leftHeaderLink}>
				<Link to="/" className={itemStyles.linkText}>{'< Home'}</Link>
			</div>
		)
		
		const logo = item ? (
			<img src={`https://www.1stdibs.com${item.seller.logo}`} />
		): '';
		
		return (
			<div className={itemStyles.itemHeader}>
				{link}
				{logo}
			</div>
		);
	}
}

export default ItemHeader;