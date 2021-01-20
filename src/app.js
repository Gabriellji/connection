require('dotenv').config()
const express = require('express')
const app = express()

const imageRouter = require('./resources/images/image.router')


app.use(express.json())

app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.json({ message: 'Service is running!'})
        return
    }
    next()
})

app.use('/image', imageRouter)

module.exports = app