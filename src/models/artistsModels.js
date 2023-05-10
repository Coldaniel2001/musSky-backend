const { Schema, model } = require("mongoose")

const artistSchema = Schema({
    artist: {
        type: String,
        required: true
    },
    tracks: [{
        type: String,
        required: true
    }]

})

const ArtistModel = model("Artist", artistSchema)

module.exports = ArtistModel