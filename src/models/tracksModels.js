const { Schema, model } = require("mongoose")

const tracksSchema = Schema({
    nameArtist: [{
        type: Schema.Types.ObjectId,
        ref: "Users",
    }],
    nameSong: {
        type: String,
        required: true        
    },
    picture: {
        type: String,
        required: true
    },
    song: {
        type: String,
        required: true
    },
    genres: {
        type: String,
        required: true
    },
    updated_at: {
        type: String,
        required: true
    },
    liked: {
        type: Boolean,
        required: true
    },
    
})

const TracksModel = model("Tracks", tracksSchema)

module.exports = TracksModel