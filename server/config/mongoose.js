const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/loginreg',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( ()=>console.log('Got a db!') )
    .catch( err=>console.log("Beep! Bad db! " + err) )