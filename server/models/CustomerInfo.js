const mongoose = require("mongoose");


const { Schema } = mongoose;

const customerInfo = new Schema ({
    FirstName: String,
    LastName: String,
    Email: String,
    password: String,
    PhoneNumber: Number,
    Address: String,
    City: String,
    CurrentOrder: {
        currentOrderInfo: []
    }
});

module.exports = mongoose.model('customerModel' ,customerInfo);