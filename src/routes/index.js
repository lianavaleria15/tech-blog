const { Router } = require("express");

const router = Router();

//import view routes
const viewRoutes = require("./view/index");

//import api routes
const apiRoutes = require("./api/index");

router.use("/", viewRoutes);

router.use("/api", apiRoutes);

module.exports = router;
