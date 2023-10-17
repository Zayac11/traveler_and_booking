const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const PORT = config.get('port') ?? 8000

const app = express()

app.use('/api/auth', require('./routes/auth.routes'))

async function start () {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => {
            console.log('Server has been started')
        })
    }
    catch(e) {
        console.error('Server error', e)
        process.exit(1)
    }
}

start()
