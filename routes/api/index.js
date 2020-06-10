const router = require("express").Router();

const moodRoutes = require("./mood");

const activityRoutes = require("./activity");

router.use("/mood", moodRoutes);

router.use("./activty", activityRoutes);

module.exports = router;