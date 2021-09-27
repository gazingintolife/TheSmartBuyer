const {sendCustomerQuery} = require('../controller/contact');

const contactRouter = require('express').Router();

contactRouter.post('/contact', sendCustomerQuery);

module.exports = contactRouter;