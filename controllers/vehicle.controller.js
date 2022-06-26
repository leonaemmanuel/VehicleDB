const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Vehicle = mongoose.model("Vehicle");

router.get("/", (req, res) => {
    res.render("vehicle/insert", {
        viewTitle: "Insert Vehicle"
    });
});

router.post("/", (req, res) => {
    if(req.body._id == "") {
        insertVehicle(req, res);
    } else {
        updateVehicle(req, res);
    }
});

function insertVehicle(req, res) {
    var vehicle = new Vehicle();
    vehicle.name = req.body.name;
    vehicle.model = req.body.model;
    vehicle.year = req.body.year;
    vehicle.kms = req.body.kms;
    vehicle.price = req.body.price;
    vehicle.save((err, data) => {
        if(!err) {
            res.redirect("vehicle/list");
        } else {
            console.log("Error in insertion: " + err);
        }
    });
}

function updateVehicle(req, res) {
    Vehicle.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, data) => {
        if(!err) {
            res.redirect("vehicle/list");
        } else {
            console.log("Error in updation: " + err);
        }
    });
}

router.get("/list", (req, res) => {
    Vehicle.find((err, data) => {
        if(!err) {
            res.render("vehicle/list", {
                list: data
            });
        } else {
            console.log("Error in retrieval: " + err);
        }
    });
});

router.get("/:id", (req, res) => {
    Vehicle.findById(req.params.id, (err, data) => {
        if(!err) {
            res.render("vehicle/insert", {
                viewTitle: "Update Vehicle",
                vehicle: data
            });
            console.log(data);
        }
    });
});

router.get("/delete/:id", (req, res) => {
    Vehicle.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            res.redirect("/vehicle/list");
        } else {
            console.log("Error in deletion: " + err);
        }
    });
});

module.exports = router;