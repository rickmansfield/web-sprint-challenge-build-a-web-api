// Write your "actions" router here!
const express = require('express')
const router = express.Router()
const Actions = require('./actions-model')
const {
    validateActionsId
} = require('./actions-middlware')

module.exports = router