const { Schema, model } = require("mongoose")

const playlistSchema = Schema({
    namePlaylist: {
        type: String,
        required: true        
    },
    imagePlaylist: {
        type: String,
        required: true        
    },
    song: [{
        type: Schema.Types.ObjectId,
        ref: "Tracks",
    }]
    
})

const PlaylistModel = model("Playlist", playlistSchema)

module.exports = PlaylistModel