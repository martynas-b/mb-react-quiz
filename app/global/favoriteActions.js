export const SET_FAV_ITEM = 'SET_FAV_ITEM';
export const GET_FAV_ITEMS = 'GET_FAV_ITEMS';

const FAV_STORAGE_NAME = 'V_2.0_FAV_ITEMS';

const favStorage = {

    storageAvailable: function () {
        const available = typeof (Storage) !== 'undefined';
        if (!available) {
            console.log('Local storage is not supported!');
        }
        return available;
    },

    setFavItem: function (params) {
        if (this.storageAvailable()) {
            const favItems = this.getFavItems();

            favItems[params.id] = params.favorite;

            localStorage.setItem(FAV_STORAGE_NAME, JSON.stringify(favItems));
        }
    },

    getFavItems: function () {
        let favItems = [];
        if (this.storageAvailable()) {
            const storage = localStorage.getItem(FAV_STORAGE_NAME);
            favItems = storage ? JSON.parse(storage) : {};
        }
        return favItems;
    }

};

const setFavorite = (params) => {
    return {
        type: SET_FAV_ITEM,
        id: params.id,
        favorite: params.favorite
    };
};

const getFavorite = (items) => {
    return {
        type: GET_FAV_ITEMS,
        items: items
    };
};

export const setFavoriteItem = (params) => {
    return (dispatch) => {

        favStorage.setFavItem(params);

        dispatch(setFavorite(params));
    };
};

export const getFavoriteItems = () => {
    return (dispatch) => {
        dispatch(getFavorite(favStorage.getFavItems()));
    };
};
