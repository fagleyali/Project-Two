var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Destination = require('../models/destinations');

var hotelSchema = new Schema({
    name: String,
    distance: Number,
    priceRange: String,
    destinations: [{type: Schema.Types.ObjectId,ref:"Destination"}]

})

module.exports=mongoose.model("Hotel",hotelSchema);