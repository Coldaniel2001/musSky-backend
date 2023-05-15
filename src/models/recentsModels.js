const { Schema, model } = require("mongoose")

const recentSchema = Schema({
    userId: {
        type: String,
        required: true
    },
    tracks: [{
        type: Schema.Types.ObjectId,
        ref: "Tracks",
        default: []
    }]
})

const RecentModel = model("Recents", recentSchema)

module.exports = RecentModel