import fetch from 'isomorphic-fetch';
import favStorage from './favStorage.js';

export const REQUEST_ITEM = 'REQUEST_ITEM';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';

function requestItem () {
	return {
		type: REQUEST_ITEM
	}
};

function receiveItem (item) {
	return {
		type: RECEIVE_ITEM,
		item: item
	}
};

const singleItemActions = {
	fetch: function (id) {
		return function (dispatch) {

		    dispatch(requestItem());
		    
		    fetch('/item/' + id + '/data')
		    .then( (resp) => resp.json() )
		    .then( (item) => {
		    	
		    	var favItems = favStorage.getFavItems();
		    	var inx = favItems.findIndex(function(id) {
		    		return id === item.id;
		    	});
		    	item.favorite = inx !== -1 ? true : false;
		    	
		    	dispatch(receiveItem(item));
		    });
		}
	}
};

export default singleItemActions;