const express = require("express")
const app = express()

const router = express.Router()

const { createPlaylist } = require("../controllers/playlistControllers")

const { getError } = require("../middlewares/error.middleware")
    

// const { checkJwt } = require("../middlewares/check-middlewares")
const { jwtCheck } = require("../middlewares/check-middlewares")

router.post("/newplaylist", createPlaylist)





module.exports = router;  