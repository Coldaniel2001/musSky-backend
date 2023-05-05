const { Schema, model } = require("mongoose")

const tracksSchema = Schema({
    // nameArtist: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Users",
    // }],
     nameArtist: {
        type: String,
        required:true
    },
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
    genre: {
        type: String,
        required: true
    }
})

const TracksModel = model("Tracks", tracksSchema)

module.exports = TracksModel