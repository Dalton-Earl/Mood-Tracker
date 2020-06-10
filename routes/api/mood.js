const router = require("express").Router();

const moodController = require("../../controllers/moodController");

router.route("/")
    .get(moodController.findAll)
    .post(moodController.create);

router.route("/:id")
    .get(moodController.findById)
    .put(moodController.update)
    .delete(moodController.remove);

module.exports = router;
