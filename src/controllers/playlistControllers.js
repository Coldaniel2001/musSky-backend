const PlaylistModel = require("../models/playlistModels")

const { uploadImage, deleteImage, uploadTrack } =require("../cloudinary/cloudinary")
const fs =require("fs-extra")

const createPlaylist = async (req, res) => {
    const { namePlaylist , songs, liked, private, author } = req.body
    const { imagePlaylist } = req.files

    const songsArray = JSON.parse(songs)

    try {

        const resultUploadPicture = await uploadImage(imagePlaylist.tempFilePath)
        const newPlaylist = new PlaylistModel({namePlaylist, liked:liked, private, author, imagePlaylist:resultUploadPicture.secure_url, songs:songsArray})
        await newPlaylist.save()
        await fs.unlink(imagePlaylist.tempFilePath);

        return res.status(200).json({ok: true, newPlaylist});
    } catch (error) {
        console.log(error)
        return res.status(503).json({
          ok: false,
          msg: "Something happened",
        });
    }
}

const getAllPlaylists = async (req,res) => {
    try {
        const allPlaylists = await PlaylistModel.find({})
        res.status(200).send({ ok: true, allPlaylists })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

const getPlaylistById = async (req, res) => {
    const {userId} = req.params
    console.log("here")

    try {
        const playlist = await PlaylistModel.findOne({ _id: userId }).populate("songs")
        console.log(playlist)
        res.status(200).send({ ok:true, playlist })
    } catch (error) {
        res.status(500).send({ ok: false, msg: "everything is wrong" })
        console.log(error)
    }
}



module.exports = { createPlaylist, getAllPlaylists, getPlaylistById }