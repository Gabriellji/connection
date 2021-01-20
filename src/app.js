require('dotenv').config()
const express = require('express')
const app = express()


app.use(express.json())

app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.json({ message: 'Service is running!'})
        return
    }
    next()
})

module.exports = app