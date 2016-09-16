import browseStyles from './browse';

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