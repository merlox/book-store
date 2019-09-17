const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(port, '0.0.0.0', () => {
    console.log(`> Server listening on localhost:${port}`)
})
