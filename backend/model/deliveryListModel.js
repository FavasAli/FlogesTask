import mongoose from "mongoose";

const deliveryListSchema = mongoose.Schema(
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

const Deliverylist = mongoose.model("Deliverylist", deliveryListSchema);

export default Deliverylist;