var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Destination = require('../models/destinations')
// Your Destination model is required but never used

var userSchema =  new Schema({
    name: String,
    email: String,
    googleId: String,
    destinations: [{type: Schema.Types.ObjectId,ref:"Destination"}]

});

module.exports = mongoose.model('User', userSchema);

// Excellent job for your model Ali!, to make this even better 
// I recommend adding validations and default values to
// ensure your data is sanitized before it's created