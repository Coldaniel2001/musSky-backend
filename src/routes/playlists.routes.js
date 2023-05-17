const express = require("express")
const app = express()

const router = express.Router()

const { createPlaylist, getAllPlaylists, getPlaylistById, addSongInPlaylist  } = require("../controllers/playlistControllers")

const { getError } = require("../middlewares/error.middleware")
    

// const { checkJwt } = require("../middlewares/check-middlewares")
const { jwtCheck } = require("../middlewares/check-middlewares")

router.post("/newplaylist", createPlaylist)
router.post("/addSong", addSongInPlaylist)
router.get("/", getAllPlaylists)
router.get("/id/:userId", getPlaylistById)





module.exports = router;  