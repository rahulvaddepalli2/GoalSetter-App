import axios from "axios";

const API_URL = '/api/goals/'

// Add new Goal - POST
const addGoal = async (goalData, token) => {
    // Sends Bearer token, required to access protected route
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, goalData, config)

    return response.data
}

// Get all of a user's Goals - Get
const getGoals = async (token) => {
    // Sends Bearer token, required to access protected route
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Delete User Goal - DELETE
const deleteGoal = async (goalId, token) => {
    // Sends Bearer token, required to access protected route
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + goalId, config)

    return response.data
}

const goalService = {
    addGoal,
    getGoals,
    deleteGoal,
}

export default goalService