const mongoose = require('mongoose');
const db = require("../server")

const CounterSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Counter', CounterSchema);
