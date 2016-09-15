export const SET_FAV_ITEM = 'SET_FAV_ITEM';
export const GET_FAV_ITEMS = 'GET_FAV_ITEMS';

const FAV_STORAGE_NAME = 'V_2.0_FAV_ITEMS';

const favStorage = {

	storageAvailable: function () {
		const available = typeof(Storage) !== 'undefined';
		if (!available) {
			console.log('Local storage is not supported!');
		}
		return available;
	},
	
	setFavItem: function (params) {
		if (this.storageAvailable()) {
			let favItems = this.getFavItems();
			
			favItems[params.id] = params.favorite;
			
			localStorage.setItem(FAV_STORAGE_NAME, JSON.stringify(favItems));
		}
	},
	
	getFavItems: function () {
		let favItems = [];
		if (this.storageAvailable()) {
			const favStorage = localStorage.getItem(FAV_STORAGE_NAME);
			favItems = favStorage ? JSON.parse(favStorage) : {};
		}
		return favItems;
	}
	
};

function setFavorite (params) {
	return {
		type: SET_FAV_ITEM,
		id: params.id,
		favorite: params.favorite,
	}
};

function getFavorite (items) {
	return {
		type: GET_FAV_ITEMS,
		items: items
	}
};

export const setFavoriteItem = function (params) {
	return (dispatch) => {
		
		favStorage.setFavItem(params);
		
		dispatch(setFavorite(params));
	}
};

export const getFavoriteItems = function () {
	return (dispatch) => {
		dispatch(getFavorite(favStorage.getFavItems()));
	}
};