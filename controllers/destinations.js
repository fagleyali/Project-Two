var Destination = require('../models/destinations'); 
var User = require('../models/users')
// Your User model is required but never used

module.exports={
    index,
    new: newItem,
    create,
    show,
    edit,
    update
};
let message = null;
function index(req,res,next){
 
    Destination.find({},function(err,destinations){
        
        res.render('destinations/index',{
            destinations,
            user: req.user,
            // name: req.query.name,
            title: 'All Destinations',
            message
        })
        
    })

}

function show(req, res){

    console.log(req.user);
    Destination.findById(req.params.id,function(err,destination){
        if(err) res.redirect('/destinations');
        res.render('destinations/show',{
            destination,
            user: req.user,
            title: destination.name,
            message
        })
    })
}

function create(req,res){
    var destination = new Destination(req.body);
    destination.save(function(err){
        if(err) res.render('destinations/new',{title: "Create New Destination"});
        res.redirect('/destinations');
        console.log(destination);
    })
}
    
    function newItem(req,res){
        if(req.user){
            res.render('destinations/new', {title: 'Add New Destination', user:req.user});
        }else{
            if(!req.user){
                message = "must be logged in";
                
            } else {
                
                message = null
            }
            res.redirect('/destinations')
        }
       
    };

    function edit (req,res){
        
    }

    

    function update(req,res){
        if (req.user){
            Destination.findByIdAndUpdate(req.params.id,req.body, {new: true}, function(err, updatedDestination){
                if(err) res.redirect('/destinations');
                console.log(updatedDestination)
                res.redirect('/destinations/' + req.params.id);
            })
        }
        
    }