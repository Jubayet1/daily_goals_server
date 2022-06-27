const express = require("express");
const {
  getGoals,
  postGoal,
  updateGoal,
  deleteGoal,
} = require("../Controllers/routeController");
const router = express.Router();

router.route("/").get(getGoals).post(postGoal);

router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
