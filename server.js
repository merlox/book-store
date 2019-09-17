const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const port = 8000

app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, '0.0.0.0', () => {
    console.log(`> Server listening on localhost:${port}`)
})
