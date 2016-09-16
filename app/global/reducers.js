import { combineReducers } from 'redux';
import browse from '../browse/browseReducer';
import item from '../item/itemReducer';
import favorite from './favoriteReducer';

const reducer = combineReducers({
	browse,
	item,
	favorite
});

export default reducer;