const {postCurrentOrderItems} = require('../controller/currentOrder');

const currentOrderRouter = require('express').Router();

contactRouter.post('/api/postcurrentOrderItems', postCurrentOrderItems);

module.exports = currentOrderRouter;