const { Router } = require("express");

const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");

const router = Router();

router.use(publicRoutes);
// add auth middleware here
router.use(privateRoutes);

module.exports = router;
