const Actions = require ('./actions-model')
function validateActionsId(req, res, next) {
    const { id } = req.params
    Actions.get(id)
    .then((actions) =>{
        if(actions) {
            req.actions = actions
            next()
        } else {
            res.status(404).json({
                message: 'actions not found'
            })
        }
    })
}
module.exports = { validateActionsId }