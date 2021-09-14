const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const url = 'mongodb://localhost/file'

const upload = multer({
    dest:'upload'
})

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected....')
})

app.use(express.json())

const apiRouter = require('./routes/api')
app.use('/api',apiRouter)

app.post('/upload', upload.single('upload'), async(req,res) => {
    res.send('file upload')
})

app.listen(9000, () => {
    console.log('server started')
})