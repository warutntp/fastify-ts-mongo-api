import mongoose, { Schema, Document } from "mongoose";

interface IProduct extends Document {
  name: string;
  brandId: mongoose.Schema.Types.ObjectId;
}

const productSchema: Schema = new Schema({
  name: { type: String, required: true },
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    required: true,
  },
});

const Product = mongoose.model<IProduct>("Product", productSchema);

export { Product, IProduct };
