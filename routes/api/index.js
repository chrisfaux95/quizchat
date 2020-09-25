const router = require("express").Router();
const scoresRoutes = require("./scores");

// Book routes
router.use("/scores", scoresRoutes);

module.exports = router;
