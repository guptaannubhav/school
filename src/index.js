const express = require('express')
const app = express()
require('dotenv').config()
const routes = require('./routes')
const bootstrap = require('./bootstrap')

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT, async (error) => {
    await bootstrap()

    if (!error) {
        console.log(`Successfully listening on ${process.env.PORT}`)
    } else {
        console.log(`Failed to start server, reason: ${error.message}`)
    }
})
