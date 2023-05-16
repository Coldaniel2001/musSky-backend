const express = require("express")
const app = express()

const router = express.Router()

const { getAllTracks, addToLike, uploadSongImage, deleteTracks } = require("../controllers/tracksControllers")

const { getError } = require("../middlewares/error.middleware")


// const { checkJwt } = require("../middlewares/check-middlewares")
const { jwtCheck } = require("../middlewares/check-middlewares")

router.get("/", getAllTracks)
router.delete("/:trackId", deleteTracks)
router.put("/addToLike:userId", jwtCheck, getError, addToLike)
router.post("/imagesong", uploadSongImage)




module.exports = router;   