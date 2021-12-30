const { Router } = require("express");

//import view routes
const viewRoutes = require("./view");
//import api routes
const apiRoutes = require("./api");

const router = Router();

router.use("/", viewRoutes);

// router.use("/api", apiRoutes);

module.exports = router;
