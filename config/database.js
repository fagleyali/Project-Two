var mongoose = require('mongoose');

// As a best practice, you don't want to expose your database url in your code like this.
// I would recommend placing this inside of your .env file
const connectionString = "mongodb+srv://heroku:Arizona@2019@cluster0-eevic.mongodb.net/wdisonargaon?retryWrites=true"

mongoose.connect(connectionString,
            {useNewUrlParser:true}
    );


mongoose.connection.on('connected', function(){
    console.log(`Database is connected to: ${mongoose.connection.host}: ${mongoose.connection.port}`)
})

