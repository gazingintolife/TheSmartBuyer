const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema ({
    category_id: {type: String, required: true},
    category_parent: {type: String, required: true}
},
{collection: 'product_category'}
);
module.exports = mongoose.model('product_category', categorySchema);

 