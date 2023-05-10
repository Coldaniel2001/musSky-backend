const express = require("express")
const app = express()

const router = express.Router()

const { addSong } = require("../controllers/artistControllers")

const { getError } = require("../middlewares/error.middleware")


const { jwtCheck } = require("../middlewares/check-middlewares")

router.post("/", addSong)




module.exports = router;   