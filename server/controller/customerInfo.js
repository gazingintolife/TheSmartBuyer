const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const CustomerModel = require('../models/customer');

const getAllCustomerInfo = async (req, res) => {
  try {
    const customers = await CustomerModel.find();
    if(!customers) {
      throw new Error('No customers were found!');
    }
    res.status(200).json({
      success: true,
      body: customers,
    });
  } catch(error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
}

const getCustomerInfo = async (req, res) => {
  try {
    const customer_id = req.params.customer_id;
    if(!customer_id) {
      throw new Error('Please add a valid customer id');
    }
    const customer = await CustomerModel.findById(customer_id);
    if (!customer) {
      throw new Error(`No customer was found with the id: ${customer_id}`);
    }
    res.status(200).json({
      success: true,
      body: customer,
    })
  } catch(error) {
    res.status(400).json({
      success: false,
      error: error.message,
    })
  }
}

const updateCustomerInfo = async (req, res) => {
  try {
    const { customer_id, ...body } = req.body;
    console.log(body)
    if(!customer_id) {
      throw new Error('Please add a valid customer id');
    }
    const customer = await CustomerModel.findByIdAndUpdate(customer_id, body, { new: true });
    if (!customer) {
      throw new Error(`No customer was found with the id: ${customer_id}`);
    }
    res.status(200).json({
      success: true,
      body: customer,
    })
  } catch(error) {
    res.status(400).json({
      success: false,
      error: error.message,
    })
  }
}

const signUpCustomer = async (req, res) => {
  try {
    const body = req.body;
    if (!body.mobile) {
      throw new Error('Please add an appropriate mobile number');
    }
    const mobileChecker = await CustomerModel.find({ mobile: body.mobile });
    if (mobileChecker.length !== 0) {
      throw new Error('Given mobile already has an account');
    }
    if (!body.password) {
      throw new Error('Please add an appropriate password');
    }
    if (!body.fullName) {
      throw new Error('Please add an appropriate first name & last name');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password,salt)
    body.password = hashedPassword;
    body.status = 'ENABLED';
    const customer = await CustomerModel.create(body);
    if (!customer) {
      throw new Error(`Customer could not be created`);
    }
    const token = jwt.sign({ _id: mobileChecker._id }, 'This_is_@_Token_Secret');
    res.status(201).header('auth-token', token).json({
      success: true,
      token: token,
      body: customer,
    })
  } catch(error) {
    res.status(400).json({
      success: false,
      error: error.message,
    })
  }
}

const loginCustomer = async (req, res) => {
  try {
    const body = req.body;
    if (!body.mobile) {
      throw new Error('Please add a mobile number');
    }
    if (!body.password) {
      throw new Error('Please add a password');
    }
    const mobileChecker = await CustomerModel.findOne({ mobile: body.mobile });
    if (!mobileChecker) {
      throw new Error('Invalid credentials');
    }
    console.log(mobileChecker)
    const validPassword = await bcrypt.compare(req.body.password , mobileChecker.password)
    if(!validPassword) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ _id: mobileChecker._id }, 'This_is_@_Token_Secret');
    res.status(200).header('auth-token', token).json({
      success: true,
      token: token,
      body: mobileChecker
    })
  } catch(error) {
    res.status(400).json({
      success: false,
      error: error.message,
    })
  }
}

module.exports = {
  getAllCustomerInfo,
  getCustomerInfo,
  updateCustomerInfo,
  signUpCustomer,
  loginCustomer,
}
