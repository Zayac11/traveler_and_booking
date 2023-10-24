const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('config')
const fillDatabase = require('./helpers/fillDatabase')

const PORT = config.get('port') ?? 8000

const app = express()

app.options('*', cors()) // include before other routes

// Add headers before the routes are defined
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api', require('./routes/profile.routes'))


async function start () {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => {
            console.log('Server has been started')
        })
        // fillDatabase()

    }
    catch(e) {
        console.error('Server error', e)
        process.exit(1)
    }
}

start()
