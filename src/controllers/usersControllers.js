const UserModel = require("../models/usersModels")

const getAllUsers = (req, res) => {
    try {
        res.status(200).send({ status: 'OK' })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

const createUsers = async (req, res) => {
    try{
        const user = await UserModel.findOne({email:req.body.email})
        if(user){
            return res.status(200).send({ status: 'False', msg: "This User Exist" })
        }
        const newUser = new UserModel(req.body)
        await newUser.save()
        return  res.status(200).send({ status: 'OK', createUsers })

    }catch(error){
        res.status(500).send({ status: 'FALSE' })
    }
}

module.exports = { getAllUsers, createUsers }