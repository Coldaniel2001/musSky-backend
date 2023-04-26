const express =  require("express")

const router = express.Router()

const {getAllUsers} = require("../controllers/usersControllers")

router.get("/", getAllUsers)

module.exports = router;