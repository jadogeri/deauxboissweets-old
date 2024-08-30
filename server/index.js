const express = require("express");
const dotenv = require("dotenv")
const cors = require("cors");
const bodyParser = require("body-parser")
const { corsOptions } = require("./src/configs/cors")
const { errorHandler } = require('./src/middlewares/errorHandler');
const { initializeApp } = require("firebase/app")
const { getFirestore, getDocs, getDoc, collection } = require("firebase/firestore")

dotenv.config();


// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const { firebaseConfig } = require("./src/configs/firebase")

// Initialize Firebase
const firebaseobj = initializeApp(firebaseConfig);

//init Firestore

const db = getFirestore(); 
//console.log(JSON.stringify(firebaseobj))


// collection ref
const colRef = collection(db, 'orders')

//console.log(colRef)


getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let books = []
    snapshot.docs.forEach(doc => {
      console.log(doc)
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })


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