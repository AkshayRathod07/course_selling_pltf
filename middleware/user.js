const { User, Courses } = require('../db')


async function userMiddleware(req, res, next) {
    try {
        const username = req.headers.username;
        const password = req.headers.password;
        if (!username || !password) {
            return res.status(400).json({
                "error": true,
                "msg": "Username or password not provided"
            });
        }
        const isAdmin = await User.findOne({ username: username, password: password })
        if (isAdmin) {
            next()
        } else {
            res.status(403).json({
                "error": true,
                "msg": "User not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            "error": true,
            "msg": "Internal server error"
        });
    }
}

module.exports = userMiddleware;