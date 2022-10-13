const { User } = require('../../../database/models')

const getAll = async () => {
    return await User.find()
}

const get = async (_id) => {
    return await User.findOne({ _id })
}

const add = async (doc) => {
    return await User.insertMany(doc)
}

const update = async (_id, doc) => {
    return await User.updateOne({ _id }, doc, { upsert: true })
}

const remove = async (_id) => {
    return await User.deleteOne({ _id })
}

module.exports = {
    getAll,
    get,
    add,
    update,
    remove
}