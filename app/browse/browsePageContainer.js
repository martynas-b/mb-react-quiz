import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BrowsePage from './browsePage';

import * as browseActions from './browseActions';
import * as favoriteActions from '../global/favoriteActions';

const mapStateToProps = (state) => {
	const { browse, favorite } = state;
	
	return {
		items: browse.items,
		favItems: favorite.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(Object.assign({}, browseActions, favoriteActions), dispatch)
}

const BrowsePageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(BrowsePage);

export default BrowsePageContainer;