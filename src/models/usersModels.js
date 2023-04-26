const { Schema, model } = require("mongoose")

const userShema = Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    passwordRepeat: {
        type: String,
        required: true
    }

})

const UserModel = model("Users", userShema)

module.exports = UserModel