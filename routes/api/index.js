const router = require("express").Router();
const scoresRoutes = require("./scores");
const jeopardyRoutes = require("./jeopardy");

router.use("/scores", scoresRoutes);
router.use("/jeopardy", jeopardyRoutes);

module.exports = router;
