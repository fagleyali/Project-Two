var Destination = require('../models/destinations');
// Your Destination model is required but never used
var Hotel = require('../models/hotels');


module.exports={
    index

};

function index(req,res){
    Hotel.find({});
}
