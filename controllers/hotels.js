var Destination = require('../models/destinations');
var Hotel = require('../models/hotels');

module.exports={
    index

};

function index(req,res){
    Hotel.find({});
}
