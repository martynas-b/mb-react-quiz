import React, { Component } from 'react';

import BrowseHeader from './browseHeader';
import BrowseLoadedContainer from '../containers/browseLoadedContainer';

class BrowsePage extends Component {

	render () {
		return (
			<div>
				<BrowseHeader />
				<BrowseLoadedContainer />
			</div>
		);
	}
}

export default BrowsePage;