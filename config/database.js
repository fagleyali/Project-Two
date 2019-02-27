var mongoose = require('mongoose');

const connectionString = "mongodb+srv://heroku:Arizona@2019@cluster0-eevic.mongodb.net/wdisonargaon?retryWrites=true"

mongoose.connect(connectionString,
            {useNewUrlParser:true}
    );


mongoose.connection.on('connected', function(){
    console.log(`Database is connected to: ${mongoose.connection.host}: ${mongoose.connection.port}`)
})

