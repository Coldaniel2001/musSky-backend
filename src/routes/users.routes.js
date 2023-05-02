const express =  require("express")
const app = express()

const router = express.Router()

const {getAllUsers, createUsers} = require("../controllers/usersControllers")

const {getError} = require("../middlewares/error.middleware")
app.use(getError)

// const { checkJwt } = require("../middlewares/check-middlewares")
const {jwtCheck} = require("../middlewares/check-middlewares")

router.get("/", getAllUsers)
router.post("/",createUsers)


module.exports = router;                        