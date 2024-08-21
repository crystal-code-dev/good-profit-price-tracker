import { Document } from 'mongoose';

export interface Product extends Document {
  name: string;
  url: string;
  priceRecords: {
    price: number;
    timestamp: Date;
  }[];
}
