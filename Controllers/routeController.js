//method GET
//url (api/goals)
const getGoals = (req, res) => {
  res.status(200).json({ message: "All Goals" });
};

//method POST
//url (api/goals)
const postGoal = (req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('please fill text form')
  }
  res.status(200).json({ message: "Post a Goal" });
};

//method PUT
//url (api/goals/:id)
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update ${req.params.id}` });
};

//method DELETE
//url (api/goals/:id)
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete ${req.params.id}` });
};

module.exports = {
  getGoals,
  postGoal,
  updateGoal,
  deleteGoal,
};
