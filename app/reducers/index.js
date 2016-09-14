import { combineReducers } from 'redux';
import itemList from './itemList';
import singleItem from './singleItem';
import favorite from './favorite';

const reducer = combineReducers({
	itemList,
	singleItem,
	favorite
});

export default reducer;