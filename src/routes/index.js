const { Router } = require("express");

//import view routes
const viewRoutes = require("./view");
//import api routes
const apiRoutes = require("./api");

const authRoutes = require("./auth");

const router = Router();

router.use("/", viewRoutes);

router.use("/auth", authRoutes);

// router.use("/api", apiRoutes);

module.exports = router;
