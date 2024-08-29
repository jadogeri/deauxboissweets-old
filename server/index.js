const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser")
const { corsOptions } = require("./src/config/cors")


const app = express();

const port = process.env.PORT || 5500;

 
app.use(express.json());
app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
