const express = require("express")
const app = express()

const router = express.Router()

const { getAllTracks, addToLike } = require("../controllers/tracksControllers")

const { getError } = require("../middlewares/error.middleware")
app.use(getError)

// const { checkJwt } = require("../middlewares/check-middlewares")
const { jwtCheck } = require("../middlewares/check-middlewares")

router.get("/", getAllTracks)
router.put("/addToLike:userId", jwtCheck, getError, addToLike)



module.exports = router;   