const express = require('express');
const cors = require('cors');

//calling database
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// database stored in uri
const uri = process.env.ATLAS_URI;


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
   console.log("MongoDB dtabase connection established successfully");

})
const usersRouter = require('./routes/users');

app.use('/users', usersRouter);


app.listen(port, () => {
   console.log('server is running on port: $(port)');
});