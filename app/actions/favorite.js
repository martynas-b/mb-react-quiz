import favStorage from './favStorage';

export const SET_FAV_ITEMLIST = 'SET_FAV_ITEMLIST';
export const SET_FAV_ITEM = 'SET_FAV_ITEM';

function setFavorite (params) {
	return {
		type: params.itemList ? SET_FAV_ITEMLIST : SET_FAV_ITEM,
		id: params.id,
		favorite: params.favorite,
	}
};

export const setFavoriteItem = function (params) {
	return (dispatch) => {
		
		favStorage.setFavItem(params);
		
		dispatch(setFavorite(params));
	}
};