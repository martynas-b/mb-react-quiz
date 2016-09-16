import itemStyles from './item';

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ItemHeader extends Component {
	
	shouldComponentUpdate () {
		return false;
	}
	
	render () {

		return (
			<div className={itemStyles.itemHeader}>
				<div className={itemStyles.leftHeaderLink}>
					<Link to="/" className={itemStyles.linkText}>{'< Home'}</Link>
				</div>
				<img src={`https://www.1stdibs.com${this.props.seller.logo}`} />
			</div>
		);
	}
}
	
ItemHeader.propTypes = {
	seller: PropTypes.object
}

export default ItemHeader;