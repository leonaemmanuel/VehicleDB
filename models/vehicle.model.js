const mongoose = require("mongoose");

var vehicleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "This field is required"
    },
    model: {
        type: String,
        required: "This field is required"
    },
    year: {
        type: Number,
        required: "This field is required"
    },
    kms: {
        type: Number,
        required: "This field is required"
    },
    price: {
        type: Number,
        required: "This field is required"
    }
});

mongoose.model("Vehicle", vehicleSchema);