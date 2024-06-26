const { User } = require("../db");

const signupUser = async (req,res) =>{
    const { email, password, username } = req.body
    try {
        const user = await User.create({ email, password, username })
        res.status(201).send({ "error": false, "msg": "successFully created user " })
    } catch (err) {
        console.log(' error', err);
        res.status(500).send({ "error": true, "msg": "error in creating user" })
    }
}


module.exports = signupUser;