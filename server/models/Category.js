const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema ({
    name: {type: String, required: true},
    parent: {type: Schema.Types.ObjectId, ref: 'category'},
    children: [{type: Schema.Types.ObjectId, ref: 'category'}],
    ancestors: [{type: Schema.Types.ObjectId, ref: 'category'}],
    products: [{type: Schema.Types.ObjectId, ref: 'product'}]
},
{
    collection: 'Categories',
    timestamps: true
}
);
module.exports = mongoose.model('category', categorySchema);

 