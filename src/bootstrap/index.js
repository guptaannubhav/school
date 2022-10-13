const database = require('./database')

module.exports = async () => {
    const db = new database()

    await db.connect()
}