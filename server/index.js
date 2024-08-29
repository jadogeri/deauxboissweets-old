const express = require("express");
const dotenv = require("dotenv")
const cors = require("cors");
const bodyParser = require("body-parser")
const { corsOptions } = require("./src/configs/cors")
const { errorHandler } = require('./src/middlewares/errorHandler');


dotenv.config();

const app = express();

const port = process.env.PORT || 5500;

 
app.use(express.json());
app.use("/api/admin", require("./src/routes/adminRoutes"));
app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(bodyParser.json());
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


module.exports = { app }