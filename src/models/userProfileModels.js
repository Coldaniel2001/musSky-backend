const { Schema, model } = require("mongoose")

const userProfileSchema = Schema({
    name: [{
        type: Schema.Types.ObjectId,
        ref: "Users",
    }],
    surname: {
        type: String,
        required: true        
    },
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    updated_at: {
        type: String,
        required: true
    },
    liked: [{
        type: Schema.Types.ObjectId,
        ref: "Tracks",
    }]
    
})

const UserProfileModel = model("UserProfile", userProfileSchema)

module.exports = UserProfileModel