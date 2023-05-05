const express =  require("express")

const router = express.Router()

const {getAllUsers, createUsers, editImage, getUserByEmail} = require("../controllers/usersControllers")

router.get("/", getAllUsers)
router.post("/", createUsers)
router.post("/image", editImage)
router.get("/:email", getUserByEmail)

module.exports = router;