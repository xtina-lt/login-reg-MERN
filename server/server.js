// read enviroment variables
// require('dotenv').config()

// express: js framework - interface to Node Server
const express = require('express');
const app = express();

// cors cross-origin requests
const cors = require('cors')

// middleware for cookies
const cookieParser = require('cookie-parser')
const PORT = 8000;


app.use( express.json() )
app.use( express.urlencoded({extended:true}) )
// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser())


// connect to mongooese and routes
require('./config/mongoose')
require('./routes/users.routes')(app)
require('./routes/objs.routes')(app)




// app listen to port
app.listen(PORT, () => console.log(`Party on port: ${PORT}`) );


// LOGIN REG INSTALL
// npm i bcrypt dotenv cookie-parser jsonwebtoken