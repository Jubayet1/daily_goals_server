const express = require('express');
const dotenv = require('dotenv').config();
// const router = require('./Routes/goalRoutes');
const port = process.env.PORT || 5000;

const app = express();

app.use('/api/goals', require('./Routes/goalRoutes'));

// app.get('/', (req, res) => {
//     res.send("ami achi")
// })

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
});