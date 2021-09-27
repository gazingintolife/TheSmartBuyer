import { Mongoose } from "mongoose";


const { Schema } = Mongoose;

const productInfo = new Schema ({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String},
    size: {type: String, required: true},
    tags: [{type: String}],
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    status: {type: String}
},
{ 
    collection: "Products",
    timestamps: true
}
);

const products = Mongoose.model('product', productInfo);

export default products;