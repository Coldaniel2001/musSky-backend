const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')




const usersRouters = require('./routes/users.routes')
const tracksRouters = require('./routes/tracks.routes')
const artistsRouters = require('./routes/artist.routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './tmp',
    limits: { fileSize: 10000000 }, // 10MB max file(s) size
    abortOnLimit: true
}));


app.use("/users", usersRouters)
app.use("/tracks", tracksRouters)
app.use("/artist", artistsRouters)

module.exports=app