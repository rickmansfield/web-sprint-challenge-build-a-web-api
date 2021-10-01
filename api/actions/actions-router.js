// Write your "actions" router here!
const express = require('express')
const router = express.Router()
const Actions = require('./actions-model')
const {
    validateActionsId,
    validateActions
} = require('./actions-middlware')

router.get('/', (req, res, next) => {
    Actions.get(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})

router.get('/:id', validateActionsId, (req, res ) =>{
    res.json(req.action)
})

router.post('/', validateActions, (req, res, next) =>{

})

module.exports = router