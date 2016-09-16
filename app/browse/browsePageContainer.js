import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BrowsePage from './browsePage';

import * as itemListActions from '../actions/itemList';
import * as favoriteActions from '../actions/favorite';

const mapStateToProps = (state) => {
	const { itemList, favorite } = state;
	
	return {
		items: itemList.items,
		favItems: favorite.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(Object.assign({}, itemListActions, favoriteActions), dispatch)
}

const BrowsePageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(BrowsePage);

export default BrowsePageContainer;