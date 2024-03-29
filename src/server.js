const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')




const usersRouters = require('./routes/users.routes')
const tracksRouters = require('./routes/tracks.routes')
const recentsRouters = require('./routes/recents.routes')
const searchRouters = require('./routes/search.routes')


// const artistsRouters = require('./routes/artist.routes')
const playlistsRouters = require('./routes/playlists.routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './tmp',
    limits: { fileSize: 10000000 }, // 10MB max
    abortOnLimit: true
}));


app.use("/users", usersRouters)
app.use("/tracks", tracksRouters)
app.use("/recents",recentsRouters )
app.use("/playlists", playlistsRouters)
app.use("/search", searchRouters)


module.exports=app