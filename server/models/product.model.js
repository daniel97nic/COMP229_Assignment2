const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
    },
    description:{
        type: String,
        required: [true, "Description is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    }
},
{
    timestamps: true
}
)

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product