const router = require("express").Router();
const scoreController = require("../../controllers/scoreController");

router.route("/")
    .get(scoreController.findAllRecent)
    .post(scoreController.create);

router.route("/byID/:id")
    .get(scoreController.findById)
    .delete(scoreController.remove);

router.route("/high_scores")
    .get(scoreController.findAllHigh);

module.exports = router;