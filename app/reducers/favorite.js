import { SET_FAV_ITEM, GET_FAV_ITEMS } from '../actions/favorite';

const newFavState = (state, action) => {
	let items = JSON.parse(JSON.stringify(state.items));
	
	items[action.id] = action.favorite;
	
	return Object.assign({}, state, {
		items: items
	});
};

const favorite = (state = {
	items: null
}, action) => {
	switch (action.type) {
		case SET_FAV_ITEM:
			return newFavState(state, action)
		case GET_FAV_ITEMS:
			return Object.assign({}, state, {
				items: action.items
			})
		default:
			return state
	}
};

export default favorite;