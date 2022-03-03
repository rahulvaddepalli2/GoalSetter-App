const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// Protects routes
const protect = asyncHandler(async (req, res, next) => {
    let token

    // JWT gives auth token so we are checking authorization token & making sure it starts with 'Bearer'
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1]

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get user from token
            req.user = await User.findById(decoded.id).select('-password')

            // next calls the "next piece" of middleware
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }

    // if no token, then not authorized
    if(!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.exports = { protect }