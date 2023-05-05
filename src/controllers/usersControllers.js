const UserModel = require("../models/usersModels")

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find({})
        res.status(200).send({ status: 'OK', allUsers })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

const getUser = async (req, res) => {
    const {userId}= req.params
    try {
        const user = await UserModel.findOne({email:userId})
        res.status(200).send({ status: 'OK', user })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

const createUsers = async (req, res) => {
    const { name, nickname, picture, updated_at, email, rol, liked } = req.body
    try {
        const user = await UserModel.findOne({ email: email })
        if (user) {
            return res.status(200).send({ status: 'False', msg: "This User Exist" })
        }
        const newUser = await UserModel.create({
            name,
            nickname,
            email,
            picture,
            updated_at,
            rol,
            liked
        })
        return res.status(200).send({ status: 'OK', createUsers })

    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}


module.exports = { getAllUsers, createUsers, getUser }