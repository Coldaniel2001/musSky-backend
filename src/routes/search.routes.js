const express = require("express");
const { search } = require("../controllers/searchControllers");
const app = express()

const router = express.Router()



router.get("/:query", search)




module.exports = router;   