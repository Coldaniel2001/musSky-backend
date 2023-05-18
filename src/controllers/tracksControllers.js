const TracksModel = require("../models/tracksModels")

const { uploadImage, deleteImage, uploadTrack } =require("../cloudinary/cloudinary")
const fs = require("fs-extra")


const getAllTracks = async (req, res) => {
    try {
        const allSong = await TracksModel.find({})
        res.status(200).send({ status: 'OK', allSong })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

const deleteTracks = async (req, res) => {
    const {trackId} = req.params
    
    try {
        const deleteTracks = await TracksModel.findByIdAndDelete(trackId)
        res.status(200).send({ status: 'OK', deleteTracks })
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

const uploadSongImage = async (req, res) => {
    const {nameSong, genre, nameArtist, update_at } = req.body
    const {picture, song } = req.files


    try {
        const resultUploadSong = await uploadTrack(song.tempFilePath)
        const resultUploadPicture = await uploadImage(picture.tempFilePath)
        const newSong = new TracksModel({nameSong, genre, nameArtist, update_at, picture:resultUploadPicture.secure_url, song:resultUploadSong.secure_url})
        await newSong.save()
        // console.log(newSong)
        await fs.unlink(song.tempFilePath);
        await fs.unlink(picture.tempFilePath);

        return res.status(200).json({ok: true, newSong});
    } catch (error) {
        return res.status(503).json({
          ok: false,
          msg: "Something happened",
        });
    }
}

const updateTracks = async (req,res) => {
    const { userId, newValue } = req.body;
    const { nameSong } = newValue
    console.log(userId)

    try {
        const songChanged = await TracksModel.findOneAndUpdate({_id:userId}, {nameSong:nameSong} , {new:true})
        return res.status(200).json({ok:true, songChanged})   
    } catch (error) {
        console.log(error)
        return res.status(303).json({ok: false, msg: "Something happened", error:error})  
    }
}

module.exports = { getAllTracks, addToLike, uploadSongImage, deleteTracks, updateTracks}