const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');

const PORT = process.env.PORT || 27020;

//Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(cookieParser());

// Import routes
const contestsRoute = require('./server/Routes/contests');
const userRoute = require('./server/Routes/users');
const dogsRoute = require('./server/Routes/dogs');
const resultsRoute = require('./server/Routes/results');

//Connect to DB
dotenv.config();

try {
  mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (error) {
  console.error(error);
}

//Route Middleware
app.use('/api/users', userRoute);
app.use('/api/contests', contestsRoute);
app.use('/api/dogs', dogsRoute);
app.use('/api/results', resultsRoute);

//Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Good Boi API',
      version: '1.0.0',
      description: 'Good Boi API',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
      {
        url: `https://good-boi-application-lime.vercel.app`,
      },
    ],
  },
  apis: ['./server/Routes/*.js', './server/Swagger/*.yaml'],
};
app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerOptions)),
);

//Test route
app.get('/api/test', (req, res) => {
  res.send('test');
});

//Inject ReactApp into
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    };
});

//This text will console.log after every save of index.js
app.listen(PORT, () =>
  console.log(`The server is running on the port ${PORT}`),
);
