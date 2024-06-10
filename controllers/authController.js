const authService = require('../services/authService')

exports.registerUser = async (req, res) => {
    try {
        const user = await authService.registerUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.loginUser = async (req,res) => {
    try {
        const user = await authService.loginUser(req.body);
        res.status(200)
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}