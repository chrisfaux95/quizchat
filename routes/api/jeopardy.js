const router = require("express").Router();
const jeopardyController = require("../../controllers/jeopardyController");

router.route("/").get(jeopardyController.findAll)

router.route("/random").get(jeopardyController.findRandom);

router.route("/byID/:id").get(jeopardyController.findById);

module.exports = router;