const { Schema, model } = require("mongoose")

const artistSchema = Schema({
    artist: {
        type: Schema.Types.ObjectId,
        ref: "Users",
    },
    tracks: [{
        type: Schema.Types.ObjectId,
        ref: "Tracks",
    }]

})

const AlbumModel = model("Artist", artistSchema)

module.exports = AlbumModel