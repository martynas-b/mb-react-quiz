import React, { Component, PropTypes } from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../routes';

class Root extends Component {

	render () {
		
		return (
			<Provider store={this.props.store}>
				<Router history={browserHistory}>	
					{routes()}
				</Router>
			</Provider>
		);
	}
}

Root.propTypes = {
	store: React.PropTypes.object.isRequired
}

export default Root;