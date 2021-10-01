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

module.exports = {validateProjectId}