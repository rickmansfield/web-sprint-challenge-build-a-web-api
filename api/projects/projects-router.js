const express = require('express');
const router = express.Router();

const Projects = require('./projects-model');

const {
    validateProjectId,
} = require('./projects-middleware.js')

router.get('/', (req, res, next) => {
    Projects.get(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})

router.get('/:id', validateProjectId, (req, res) =>{
    res.json(req.project)
})