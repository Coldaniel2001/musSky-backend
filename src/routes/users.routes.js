const express =  require("express")
const app = express()

const router = express.Router()

const {getAllUsers, createUsers, getUser, editImage, getUserByEmail, updateUser} = require("../controllers/usersControllers")

const {getError} = require("../middlewares/error.middleware")

// const { checkJwt } = require("../middlewares/check-middlewares")
const {jwtCheck} = require("../middlewares/check-middlewares")

router.get("/", getAllUsers)
router.get("/:userId", getUser)
router.post("/",createUsers)
router.post("/image", editImage)
router.get("/getuser/:email", getUserByEmail)
router.patch("/update-user", updateUser)

module.exports = router;