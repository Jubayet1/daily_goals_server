const asyncHandler = require("express-async-handler");
const Goal = require("../model/goalModel");

//method GET
//url (api/goals)
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()
  res.status(200).json(goals)
});

//method POST
//url (api/goals)
const postGoal = asyncHandler(async (req, res) => {
  console.log(req.body.text);
  if (!req.body.text) {
    res.status(400);
    throw new Error("please fill text form");
  }

  const goal = await Goal.create({
    text: req.body.text
  });
  res.status(200).json(goal);
});

//method PUT
//url (api/goals/:id)
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update ${req.params.id}` });
});

//method DELETE
//url (api/goals/:id)
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete ${req.params.id}` });
});

module.exports = {
  getGoals,
  postGoal,
  updateGoal,
  deleteGoal,
};
