const ArtistModel = require("../models/artistsModels")


const addSong = async (req, res) => {
    const {nameSong, nameArtist } = req.body

    try {
        const artist= await ArtistModel.findOne({artist:nameArtist})
        artist.tracks.push(nameSong)
        await artist.save()
        res.status(200).send({ status: 'OK' })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

module.exports={addSong}