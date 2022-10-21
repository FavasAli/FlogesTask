import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    product_id: {
      type: String,
      required: true,
    },
    product_name: {
      type: String,
    },

  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;