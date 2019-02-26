var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/destinations',
            {useNewUrlParser:true}
    );


mongoose.connection.on('connected', function(){
    console.log(`Database is connected to: ${mongoose.connection.host}: ${mongoose.connection.port}`)
})

