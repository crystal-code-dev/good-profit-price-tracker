import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  priceRecords: [
    {
      price: { type: Number, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
});
