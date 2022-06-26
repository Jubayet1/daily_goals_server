const getGoals = (req, res) => {
  res.status(200).json({ message: "All Goals" });
};
const postGoal = (req, res) => {
  res.status(200).json({ message: "Post a Goal" });
};
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update ${req.params.id}` });
};
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete ${req.params.id}` });
};

module.exports = {
  getGoals,
  postGoal,
  updateGoal,
  deleteGoal
};
