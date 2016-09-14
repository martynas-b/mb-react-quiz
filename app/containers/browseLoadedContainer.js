import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BrowseContainer from '../components/browseContainer';

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

const BrowseLoadedContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(BrowseContainer);

export default BrowseLoadedContainer;