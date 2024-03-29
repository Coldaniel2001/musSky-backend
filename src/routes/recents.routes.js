const express = require("express")
const app = express()

const router = express.Router()

const { addRecent, getAllRecient } = require("../controllers/recentsControllers")

const { getError } = require("../middlewares/error.middleware")

const { jwtCheck } = require("../middlewares/check-middlewares")


router.get("/:userId", getAllRecient)
router.post("/:userId", jwtCheck, getError, addRecent)




module.exports = router;   