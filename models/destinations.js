var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Hotel = require('../models/hotels');
var User = require('../models/users')
// Hotel and User are required but never used

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

// Excellent job for your model Ali!, to make this even better 
// I recommend adding validations and default values to
// ensure your data is sanitized before it's created