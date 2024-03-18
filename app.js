const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();


const app = express()
const PORT = process.env.PORT || 4200

app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI);

const postRoutes = require('./routes/post')
app.use('/api/posts', postRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})