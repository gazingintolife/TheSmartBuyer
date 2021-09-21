const mongoose = require("mongoose");


const { Schema } = mongoose;

const customerInfo = new Schema ({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: String,
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      require: true,
    },
    address: String,
    city: String,
    status: String
},
{
  collection: "Users",
  timestamps: true
});

module.exports = mongoose.model('customerModel' ,customerInfo);