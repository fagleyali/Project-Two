var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    name: String,
    location: String,
    imageUrl: String
   
},{
    timestamps: true
});

module.exports=mongoose.model('Destination', destinationSchema)