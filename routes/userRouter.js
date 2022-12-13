const express = require("express")
const router = express.Router()

const controller = require("../controllers/userController")
router.get("/", controller.Getregister)
router.get("/buscar", controller.Getsearch)
router.post("/registrar", controller.PostCreateUser)
router.post("/search", controller.PostSearch)

module.exports = router;