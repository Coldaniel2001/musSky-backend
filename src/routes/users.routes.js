const express =  require("express")

const router = express.Router()

const {getAllUsers, createUsers} = require("../controllers/usersControllers")

router.get("/", getAllUsers)
router.post("/", createUsers)


module.exports = router;