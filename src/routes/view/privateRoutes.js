const { Router } = require("express");

//import controller fs
const { renderDashboard } = require("../../controllers/view");

const router = Router();

router.get("/dashboard", renderDashboard);

module.exports = router