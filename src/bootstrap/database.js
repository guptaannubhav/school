const mongoose = require('mongoose')

class DB {
    connection

    async connect() {
        mongoose.connect(process.env.MONGODB_CONNECTION_STRING)

        mongoose.connection.on('connected', () => {
            console.log('database connected successfully')
        })

        mongoose.connection.on('error', (error) => {
            console.log('database connection failed')

            throw error
        })

        return true
    }
}

module.exports = DB