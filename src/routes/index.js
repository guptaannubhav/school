const Router = require('express').Router()
const users = require('./users')

Router.use('/users', users)

module.exports = Router
