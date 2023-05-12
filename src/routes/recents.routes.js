const express = require("express")
const app = express()

const router = express.Router()

const { addRecent } = require("../controllers/recentsControllers")

const { getError } = require("../middlewares/error.middleware")
    
const { jwtCheck } = require("../middlewares/check-middlewares")


router.post("/:userId", addRecent )




module.exports = router;   