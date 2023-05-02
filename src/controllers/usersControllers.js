const UserModel = require("../models/usersModels")

const getAllUsers = (req, res) => {
    try {
        res.status(200).send({ status: 'OK' })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

const createUsers = async (req, res) => {
    const { name, nickname, picture, updated_at, email } = req.body
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
            updated_at
        })
        return res.status(200).send({ status: 'OK', createUsers })

    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}


module.exports = { getAllUsers, createUsers }