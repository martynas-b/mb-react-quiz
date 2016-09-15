import itemStyles from '../css/item';

import React, { Component } from 'react';

import Price from './price';

class ItemData extends Component {
	
	shouldComponentUpdate () {
		return false;
	}
	
	render () {
		const {title, price, measurements} = this.props;
		
		return (
			<div className={itemStyles.dataContainer}>
				<div className={itemStyles.dataTop}>
					<div className={itemStyles.header2}>{title}</div>
					<div className={itemStyles.header2} style={{marginTop: 10, marginBottom: 10}}><Price price={price} /></div>
					<div className={itemStyles.header3}>Measurements:</div>
					<div>H {measurements.height} Dm {measurements.diameter}</div>
				</div>
				<div className={itemStyles.purchaseBtn}>PURCHASE</div>
				<div className={itemStyles.offerBtn}>MAKE OFFER</div>
			</div>
		);
	}
}

export default ItemData;