const moongose = require('mongoose')

const config = require('../config/config')


moongose.set('strictQuery', false)

function connect() {
    return moongose.connect(config.db.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connect