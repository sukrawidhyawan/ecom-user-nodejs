'use strict'

const debug = require('debug')('main')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/main-routes')
const db = require('./models/db')

const port = 1234 // example port
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', routes)

debug('booting app..')
runApp().catch(error => debug(error))

async function runApp() {
    await db.then(() => debug("Connected to DB")).catch(err => debug('err: ', err))

    app.listen(port, () => {
        debug('Server is up and running on port number ' + port)
    })
}
