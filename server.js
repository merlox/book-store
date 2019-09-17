const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const MongoClient = require('mongodb').MongoClient
const app = express()
const port = 8000
let db = {}
let userConnected = null

app.use((req, res, next) => {
    console.log(`${req.method} to ${req.originalUrl}`)
    next()
})
app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.post('/user', async (req, res) => {
    if(req.body.password != req.body.repeatPassword) {
        return res.json({
            ok: false,
            msg: 'The passwords are not the same',
        })
    }
    try {
        await db.collection('users').insertOne({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({
            ok: true,
            msg: 'The user has been created successfully',
        })
    } catch (e) {
        res.json({
            ok: false,
            msg: 'There was an error adding the user to the database',
        })
    }
})
app.post('/user/login', async (req, res) => {
    try {
        const request = await db.collection('users').findOne({
            email: req.body.email,
            password: req.body.password,
        })
        userConnected = request
        res.json({
            ok: true,
            msg: 'User found',
            name: request.name,
        })
    } catch (e) {
        res.json({
            ok: false,
            msg: 'There was an error login with the user to the database',
        })
    }
})
app.get('/user', (req, res) => {
    if (userConnected) {
        res.json(userConnected)
    } else {
        res.json({})
    }
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

start()

async function start () {
    await connectDatabase()
    app.listen(port, '0.0.0.0', () => {
        console.log(`> Server listening on localhost:${port}`)
    })
}

function connectDatabase () {
    return new Promise((resolve, reject) => {
        const client = new MongoClient('mongodb://example1:example1@ds125945.mlab.com:25945/node-backend', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        client.connect((err, client) => {
            if (err) {
                console.error('There was an error', err)
                reject(err)
            }
            db = client.db('node-backend')
            client.close()
            resolve()
        })
    })
}
