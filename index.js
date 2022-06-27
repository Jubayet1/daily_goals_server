const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHanddler } = require("./middleware/errorMiddleWare");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./Routes/goalRoutes"));

app.use(errorHanddler);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
