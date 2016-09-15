import fetch from 'isomorphic-fetch';

export const REQUEST_ITEMLIST = 'REQUEST_ITEMLIST';
export const RECEIVE_ITEMLIST = 'RECEIVE_ITEMLIST';

function requestItemList () {
	return {
		type: REQUEST_ITEMLIST
	}
};

function receiveItemList (params) {
	return {
		type: RECEIVE_ITEMLIST,
		items: params.items,
		concat: params.concat
	}
};

export const fetchItemList = function (params) {
	return (dispatch) => {

	    dispatch(requestItemList());
	    
	    fetch(`/browse/data?start=${params.start}&limit=${params.limit}`)
	    .then( (resp) => resp.json() )
	    .then( (data) => {
	    	dispatch(receiveItemList({
	    		items: data.items,
	    		concat: params.concat
	    	}));
	    });
	}
};