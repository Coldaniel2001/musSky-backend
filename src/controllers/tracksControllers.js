const TracksModel = require("../models/tracksModels")


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
        const updateLike = await TracksModel.findByIdAndUpdate(
            liked._id,
            [
                {
                    $set: {
                        likedBy: {
                            $cond: {
                                if: { $in: [userId, '$likedBy'] },
                                then: { $setDifference: ['$likedBy', [userId]] },
                                else: { $concatArrays: ['$likedBy', [userId]] },
                            },
                        },
                    },
                },
            ],
            {
                new: true
            },
            {
                upsert: true
            },

        )
        res.status(200).send({ status: 'OK', updateLike })
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: 'FALSE' })
    }
}


module.exports = { getAllTracks, addToLike }