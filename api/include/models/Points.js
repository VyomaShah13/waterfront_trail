const mongoose = require('./../database')

const Points = mongoose.model("Points", new mongoose.Schema({
    title: String,
    description: String,
    coordinates: {
        lat: Number,
        lng: Number,
        zoom: Number
    }
}))

module.exports = Points