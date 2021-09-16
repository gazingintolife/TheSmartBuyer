const Mongoose = require('mongoose');

const { Schema } = Mongoose;

const currentOrder = new Schema({
    _id: Schema.Types.ObjectId,
    product: [],
    customer: [{type: Schema.Types.ObjectId, ref: 'customerModel'}]
},{
    collection: "currentOrder"
});

module.exports = Mongoose.model('currentOrder', currentOrder);