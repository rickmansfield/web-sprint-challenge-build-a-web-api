const Projects = require('./projects-model.js')

function validateProjectId(req, res, next) {
    const { id } = req.params
    Projects.get(id)
    .then((project) =>{
        if(project) {
            req.project = project
            next()
        } else {
            res.status(404).json({
                message: 'Project not found'
            })
        }
    })
}

function validatePost(req, res, next) {
    const { name, description, completed } = req.body
    if (!name || !description || !name.trim() || completed == null) {
        res.status(400).json({
            message: 'Missing required name or description field'
        })
    } else {
        next()
    }
}

module.exports = {validateProjectId, validatePost}