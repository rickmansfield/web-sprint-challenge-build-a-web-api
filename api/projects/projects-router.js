const express = require('express')
const router = express.Router()
const Projects = require('./projects-model')
const {
    validateProjectId,
    validateProject,
} = require('./projects-middleware')

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

router.post('/', validateProject, (req, res, next) =>{
    Projects.insert(req.body)
    .then((newProject) =>{
        res.status(201).json(newProject)
    })
    .catch(next)
})


module.exports = router