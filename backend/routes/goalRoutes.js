const express = require('express')
const router = express.Router()
const { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal, 
} = require('../controllers/goalController')

// Specifies routes for when router calls the RESTful functions we created (ie, getGoals, setGoals)

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router