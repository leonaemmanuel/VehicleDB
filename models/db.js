const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Vehicles", {
    useNewUrlParser: true
},
err => {
    if(!err) {
        console.log("Connection is successful!");
    } else {
        console.log("Error in connection!");
    }
});

require("./vehicle.model");