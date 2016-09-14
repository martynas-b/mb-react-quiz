import { REQUEST_ITEMLIST, RECEIVE_ITEMLIST } from '../actions/itemList.js';

export default function itemList (state = {
	isFetching: false,
	items: null
}, action) {
	switch (action.type) {
		case REQUEST_ITEMLIST:
			return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIVE_ITEMLIST:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.concat ? JSON.parse(JSON.stringify(state.items)).concat(action.items) : action.items
			})
		default:
			return state
	}
};