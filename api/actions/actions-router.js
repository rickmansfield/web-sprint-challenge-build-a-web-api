// Write your "actions" router here!
const express = require('express')
const router = express.Router()
const Actions = require('./actions-model')
const {
    validateActionsId
} = require('./actions-middlware')

router.get('/', (req, res, next) => {
    Actions.get(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})

router.get('/:id', validateActionsId, (req, res ) =>{
    res.status(200).json(req.action)
})

module.exports = router