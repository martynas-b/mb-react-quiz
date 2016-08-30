import fetch from 'isomorphic-fetch';
import {REQUEST_ITEMLIST, RECEIVE_ITEMLIST} from '../constants';

function requestItemList () {
	return {
		type: REQUEST_ITEMLIST
	}
};

function receiveItemList (items) {
	return {
		type: RECEIVE_ITEMLIST,
		items: items
	}
};

var itemListActions = {
		
	fetch: function (limit) {
		return function (dispatch) {

		    dispatch(requestItemList());
		    
		    fetch('/browse/data?start=0&limit=' + limit)
		    .then( (resp) => resp.json() )
		    .then( (data) => dispatch(receiveItemList(data.items)) );
		  }
	}

};

const actions = {
	itemList: itemListActions
};

export default actions;