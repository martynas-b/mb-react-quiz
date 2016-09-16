import { REQUEST_ITEM, RECEIVE_ITEM } from '../item/itemActions';

const item = (state = {
	isFetching: false,
	item: null
}, action) => {
	switch (action.type) {
		case REQUEST_ITEM:
			return Object.assign({}, state, {
				isFetching: true,
				item: null
			})
		case RECEIVE_ITEM:
			return Object.assign({}, state, {
				isFetching: false,
				item: action.item
			})
		default:
			return state
	}
};

export default item;