const { Schema, model } = require("mongoose")

const recentSchema = Schema({
    userId: {
        type: String,
        required: true
    },
    tracks: [{
        type: String,
        required: true,
    }]
})

const RecentModel = model("Recents", recentSchema)

module.exports = RecentModel