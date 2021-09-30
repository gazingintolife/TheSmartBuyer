import mongoose, { Schema } from "mongoose";

const productSchema = new Schema (
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: String,
    // size: {type: String, required: true},
    tags: {
      type: [String],
      default: [],
    },
    sku: {
      type: String,
      required: true,
    },
    category_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    status: {
      type: String,
      required: true,
    }
  },
  { 
    timestamps: {
      createdAt: 'created_on',
      updatedAt: 'updated_on',
    },
  }
);

const products = mongoose.model('product', productSchema);

export default products;