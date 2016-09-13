import { connect } from 'react-redux';

import ItemContainer from '../components/itemContainer';

import * as singleItemActions from '../actions/singleItem';

const mapStateToProps = (state) => {
	return {
		item: state.singleItem.item
	}
};

const ItemLoadedContainer = connect(
	mapStateToProps,
	singleItemActions
)(ItemContainer);

export default ItemLoadedContainer;