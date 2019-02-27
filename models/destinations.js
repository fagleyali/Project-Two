var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Hotel = require('../models/hotels');
var User = require('../models/users')

var destinationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },

    Creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    hotels: [{type:Schema.Types.ObjectId, ref:"Hotel"}]
},{
    timestamps: true
});

module.exports=mongoose.model('Destination', destinationSchema)