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
    songs: [{
        type: Schema.Types.ObjectId,
        ref: "Tracks",
    }],
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "Users",
    }],
    private:{
        type: Boolean,
        required: true  
    }

    
})

const PlaylistModel = model("Playlist", playlistSchema)

module.exports = PlaylistModel