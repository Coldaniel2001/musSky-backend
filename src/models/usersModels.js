const { Schema, model } = require("mongoose")

const userSchema = Schema({
    name: {
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
    picture: {
        type: String,
        required: true
    },
    updated_at: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    liked: [{
        type: Schema.Types.ObjectId,
        ref: "Tracks",
    }]
})

const UserModel = model("Users", userSchema)

module.exports = UserModel