const express = require("express");
const {
  getGoals,
  postGoal,
  updateGoal,
  deleteGoal,
} = require("../Controllers/routeController");
const router = express.Router();

router.get("/", getGoals);
router.post("/", postGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);

module.exports = router;
