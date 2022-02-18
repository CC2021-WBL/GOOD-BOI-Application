const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const PORT = process.env.PORT || 27020;

//Middleware
app.use(cors());
app.use(express.json());
// app.use(helmet());
// app.use(cookieParser());

// Import routes
const contestsRoute = require('./ServerRoutes/contests');
const userRoute = require('./ServerRoutes/users');
const dogsRoute = require('./ServerRoutes/dogs');

//Connect to DB
dotenv.config();

try {
  mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
} catch (error) {
  console.error(error);
}


//Route Middleware
app.use('/api/users', userRoute);
app.use('/api/contests', contestsRoute);
app.use('/api/dogs', dogsRoute);

//Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Good Boi API",
      version: "1.0.0",
      description: "Good Boi API"
    },
    servers: [
      {
        url: `http://localhost:${PORT}`
      }
    ],
  },
  apis: ["./ServerRoutes/*.js"]
}
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerOptions)))


//Routes
app.get('/', (req, res) => {
  res.send('Homepage');
});

app.listen(PORT, () => console.log(`The server is running on the port ${PORT}`));
