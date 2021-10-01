const express = require('express')
const server = express()
const projectsRouter = require('./projects/projects-router')
// const actionsRouter = require('./actions/actions-router')

server.use(express.json())

server.get('/', (req, res) => {
    res.json({ message: 'Api is working add a route to see more' });
    console.log('api is working');
})

// server.use('/api/actions', actionsRouter)
server.use('/api/projects', projectsRouter)

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = server;
