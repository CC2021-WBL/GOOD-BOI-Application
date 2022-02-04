const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const PORT = 3000;

//Middleware
app.use(express.json());

// Import routes
const authRoute = require('../ServerRoutes/auth');
const contestsRoute = require('../ServerRoutes/contests');

//Connect to DB
dotenv.config();

mongoose
  .connect(process.env.DB_CONNECT2, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected!'))
  .catch((err) => console.log(err));

//Route Middleware
app.use('/user', authRoute);
app.use('/contests', contestsRoute);

//Routes
app.get('/', (req, res) => {
  res.send('Homepage');
});

app.listen(PORT, () => console.log('server is running'));
