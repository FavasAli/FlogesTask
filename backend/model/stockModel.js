import mongoose from "mongoose";

const stockSchema = mongoose.Schema(
  {
    product_id: {
      type: String,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

const Stock = mongoose.model("Stock", stockSchema);

export default Stock;