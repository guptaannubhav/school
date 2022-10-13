const services = require('../services')

const getAll = async (req, res, next) => {
    try {
        const users = await services.getAll()

        res.send({
            data: users   
        })
    } catch (error) {
        next(error)
    }
}

const get = async (req, res, next) => {
    const { _id } = req.param

    try {
        const user = await services.get(_id)

        res.send({
            data: user
        })
    } catch (error) {
        next(error)
    }
}

const add = async (req, res, next) => {

    try {
        const user = await services.add(req.body)

        res.send({
            data: user,
            message: 'Added successfully'
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    const { _id } = req.param

    try {
        const user = await services.update(_id, req.body)

        res.send({
            data: user,
            message: 'Updated successfully'
        })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    const { _id } = req.param

    try {
        await services.remove(_id)

        res.send({
            message: 'Removed successfully'
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAll,
    get,
    add,
    update,
    remove
}
