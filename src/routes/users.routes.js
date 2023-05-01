const express =  require("express")

const router = express.Router()

const {getAllUsers, createUsers, editImage} = require("../controllers/usersControllers")

router.get("/", getAllUsers)
router.post("/", createUsers)
router.post("/image", editImage)


module.exports = router;