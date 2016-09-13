import { connect } from 'react-redux';

import BrowseContainer from '../components/browseContainer';

import * as itemListActions from '../actions/itemList';

const mapStateToProps = (state) => {
	return {
		items: state.itemList.items
	}
};

const BrowseLoadedContainer = connect(
	mapStateToProps,
	itemListActions
)(BrowseContainer);

export default BrowseLoadedContainer;