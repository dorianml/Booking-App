const express = require('express')
const app = express()
const router = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = router;
const port = 5000

// Cors
var cors = require('cors');
app.use(cors())

const mongoose = require('mongoose')

// Routes
const rooms = require('./routes/rooms.js')
app.use('/rooms', rooms)

// App Listen
app.listen(port, () => {
    mongoose.connect(`mongodb+srv://Dodo:kelnorin01@cluster0.nvdkv.mongodb.net/escapeg?retryWrites=true&w=majority`)
    .then(() => {
      console.log("//Mongo Escape DataBase OK")
      console.log(`Server listening on port ${port}`)
    })
  .catch(() => {
    console.log("//Problem Mongo")
  })                                            
})