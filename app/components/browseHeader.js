import browseStyles from '../css/browse';

import React, { Component } from 'react';

class BrowseHeader extends Component {
	
	render () {
		
		return (
			<div className={browseStyles.browseHeader}>
				Browse Page
			</div>
		);
	}
}

export default BrowseHeader;