//method POST
//url (api/users)
const registerUser = (req, res) => {
  res.status(200).json({ message: "Register User" });
};
//method POST
//url (api/users/login)
const LogInUser = (req, res) => {
  res.status(200).json({ message: "LogIn User" });
};

//method GET
//url (api/users)
const getMe = (req, res) => {
  res.status(200).json({ message: "Display User" });
};

module.exports = { registerUser, LogInUser, getMe };
