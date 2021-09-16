const {
  updateCustomerInfo,
  getCustomerInfo,
  getAllCustomerInfo,
  signUpCustomer,
  loginCustomer,
} = require('../controller/customerInfo');

const customerInfoRouter = require('express').Router();

customerInfoRouter.get('/', getAllCustomerInfo);
customerInfoRouter.get('/:customer_id', getCustomerInfo);
customerInfoRouter.patch('/', updateCustomerInfo);
customerInfoRouter.post('/signup', signUpCustomer);
customerInfoRouter.post('/login', loginCustomer);

module.exports = customerInfoRouter;
