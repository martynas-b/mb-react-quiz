import fetch from 'isomorphic-fetch';

export const REQUEST_ITEM = 'REQUEST_ITEM';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';

const requestItem = () => {
	return {
		type: REQUEST_ITEM
	}
};

const receiveItem = (item) => {
	return {
		type: RECEIVE_ITEM,
		item: item
	}
};

export const fetchItem = (id) => {
	return (dispatch) => {

	    dispatch(requestItem());
	    
	    fetch(`/item/${id}/data`)
	    .then( (resp) => resp.json() )
	    .then( (item) => {
	    	dispatch(receiveItem(item));
	    });
	}
};