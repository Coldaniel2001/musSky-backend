const TracksModel = require("../models/tracksModels")
const UsersModels = require("../models/usersModels")

const getAllTracks = async (req, res) => {
    try {
        const allSong = await TracksModel.find({})
        res.status(200).send({ status: 'OK', allSong })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

const addToLike = async (req, res) => {
    const { liked } = req.body
    const { userId } = req.params

    try {
        const oneSong = await TracksModel.findById(liked._id)
        const oneUser = await UsersModels.findById(userId)

        if(oneUser.liked.includes(oneSong._id)){
            oneUser.liked.pull(oneSong._id)
        }else{
            oneUser.liked.push(oneSong._id)
        }
        await oneUser.save()

        res.status(200).send({ status: 'OK', oneUser})
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: 'FALSE' })
    }
}

module.exports = { getAllTracks, addToLike }