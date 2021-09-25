const Mongoose = require('mongoose');

const { Schema } = Mongoose;

const currentOrder = new Schema({
    products: [{type: Schema.Types.ObjectId, ref: 'products'}],
    customer: [{type: Schema.Types.ObjectId, ref: 'customer'}],
    status: {type: String, required: true},
    orderTotal: {type: Number}
},{
    collection: "Orders",
    timestamps: true
});

module.exports = Mongoose.model('order', currentOrder);