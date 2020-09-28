const router = require("express").Router();
const jeopardyController = require("../../controllers/jeopardyController");

router.route("/").get(jeopardyController.findAll)

router.route("/:id").get(jeopardyController.findById);

router.route("/random").get(jeopardyController.findRandom);

module.exports = router;