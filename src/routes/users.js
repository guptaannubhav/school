const Router = require('express').Router()
const { User } = require('../modules')

Router.get('/', User.getAll)

Router.get('/:_id', User.get)

Router.post('/', User.add)

Router.put('/:_id', User.update)

Router.delete('/:_id', User.remove)

module.exports = Router
