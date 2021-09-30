const mongoose, { Schema } = require('mongoose');

const categorySchema = new Schema (
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    parent: {
      type: Schema.Types.ObjectId,
      default: null,
    },
    children: {
      type: [Schema.Types.ObjectId],
      default: [],
    },
    ancestors: {
      type: Schema.Types.ObjectId,
      default: [],
    },
    products: {
      type: Schema.Types.ObjectId,
      default: [],
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created_on',
      updatedAt: 'updated_on',
    },
  }
);
module.exports = mongoose.model('category', categorySchema, 'category');
