const express = require('express')
const router = express.Router()
const { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal, 
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

// Clean way to write same routes for RESTful functions we created (ie, getGoals, setGoals)

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router