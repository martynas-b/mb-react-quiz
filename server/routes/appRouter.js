const express = require('express');
const cachedItems = require('../data/items.json');

const appRouter = express.Router();

const getItems = function (payload) {
    const start = Number.parseInt(payload.start) || 0;
    const limit = Number.parseInt(payload.limit) || 9;
    const items = cachedItems.slice(start, start + limit);

    return {
        items: items,
        totalItems: cachedItems.length
    };
};

const getItem = function (itemId) {
    return cachedItems.find(function (item) {
        return item.id === itemId || item.integerId === itemId;
    }) || {};
};

appRouter.get('/browse/data', (req, res)=>{
    const response = getItems(req.query);
    res.status(200).json(response);
});

appRouter.get('/item/:id/data', (req, res) => {
    const id = req.params.id;
    const item = getItem(id);
    res.status(200).json(item);
});

appRouter.get('*', (req, res) => {
    res.render('app', {});
});

module.exports = appRouter;
