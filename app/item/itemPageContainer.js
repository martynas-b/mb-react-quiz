import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ItemPage from './itemPage';

import * as itemActions from './itemActions';
import * as favoriteActions from '../global/favoriteActions';

const mapStateToProps = (state) => {
	const { item, favorite } = state;
	
	return {
		item: item.item,
		favItems: favorite.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(Object.assign({}, itemActions, favoriteActions), dispatch)
}

const ItemPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemPage);

export default ItemPageContainer;