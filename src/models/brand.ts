import mongoose, { Schema, Document } from "mongoose";

interface IBrand extends Document {
  name: string;
}

const brandSchema: Schema = new Schema({
  name: { type: String, required: true },
});

const Brand = mongoose.model<IBrand>("Brand", brandSchema);

export { Brand, IBrand };
