import { Mongoose } from "mongoose";


const { Schema } = Mongoose;

const ProductInfo = new Schema ({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    images: [],
    description: String,
    size: String,
    Department: String,
    category: String,
    tags: []  
});

const Product = Mongoose.model('Products', ProductInfo);

export default Product;