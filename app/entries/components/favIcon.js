import commonStyles from "../css/common.css";
import React from 'react';
import { connect } from 'react-redux';

var FavIcon = React.createClass({

	render: function () {
		var heartSrc = '/img/heart_empty_24.png';
		
		
		return (
			<div>
				<img className={commonStyles.favoriteIcon} src={heartSrc} />			
			</div>
		);
	}
});

module.exports = FavIcon;