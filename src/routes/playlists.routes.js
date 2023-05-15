const express = require("express")
const app = express()

const router = express.Router()

const { createPlaylist, getAllPlaylists } = require("../controllers/playlistControllers")

const { getError } = require("../middlewares/error.middleware")
    

// const { checkJwt } = require("../middlewares/check-middlewares")
const { jwtCheck } = require("../middlewares/check-middlewares")

router.post("/newplaylist", createPlaylist)
router.get("/", getAllPlaylists)





module.exports = router;  