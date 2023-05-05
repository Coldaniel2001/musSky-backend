const express =  require("express")
const app = express()

const router = express.Router()

const {getAllUsers, createUsers, getUser, editImage, getUserByEmail} = require("../controllers/usersControllers")

const {getError} = require("../middlewares/error.middleware")
app.use(getError)

// const { checkJwt } = require("../middlewares/check-middlewares")
const {jwtCheck} = require("../middlewares/check-middlewares")

router.get("/", getAllUsers)
router.get("/:userId", getUser)
router.post("/",createUsers)
router.post("/image", editImage)
router.get("/:email", getUserByEmail)

module.exports = router;                        