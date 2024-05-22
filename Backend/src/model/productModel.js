import mongoose from "mongoose";

const productModel = new mongoose.Schema(
    {
        title: String,
        price: Number,
        rate: Number,
        like: Number,
        description: Number,
        image: String
    }
)

const Product = mongoose.model("Products", productModel);
export default Product