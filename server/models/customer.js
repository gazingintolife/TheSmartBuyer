const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerInfo = new Schema ({
    fullName: {
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
    status: String
},
{
  collection: "Users",
  timestamps: true
});

module.exports = mongoose.model('customer' ,customerInfo);