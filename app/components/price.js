import React from 'react';

class Price extends React.Component {

	render () {
		
		const {price} = this.props;
		
		const priceVal = price ? price.amounts.USD : 'Price Upon Request';
		
		return (
			<div>
				{priceVal}
			</div>
		);
	}
}

export default Price;