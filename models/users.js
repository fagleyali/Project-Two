var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Destination = require('../models/destinations')

var userSchema =  new Schema({
    name: String,
    email: String,
    googleId: String,
    destinations: [{type: Schema.Types.ObjectId,ref:"Destination"}]

});

module.exports = mongoose.model('User', userSchema);