const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')

const authRoutes = require('./routes/authRoutes')
const departmentRoutes = require('./routes/departmentRoutes')
dotenv.config()

const app = express()
const PORT = process.env.port || 3000

app.use('/api/auth', authRoutes);
app.use('/api/dept', departmentRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('connection successful')
        app.listen(PORT, () => {
            console.log(`Server is listening to port ${PORT}`)
        })
    })
    .catch((error) => {
        console.error("connection error", error.message)
    })