import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ItemContainer from '../components/itemContainer';

import * as singleItemActions from '../actions/singleItem';
import * as favoriteActions from '../actions/favorite';

const mapStateToProps = (state) => {
	const { singleItem, favorite } = state;
	
	return {
		item: singleItem.item,
		favItems: favorite.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(Object.assign({}, singleItemActions, favoriteActions), dispatch)
}

const ItemLoadedContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemContainer);

export default ItemLoadedContainer;