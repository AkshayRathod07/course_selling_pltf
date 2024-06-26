const { Courses, User, Admin } = require("../db");

const createCourse  = async (req,res) =>{
    const {title, description, price,imageLink,published } = req.body

    try {
        const courses = await Courses.create({ title, description, price ,imageLink,published})
        console.log('courses=>', courses);
        res.status(201).send({ "error": false, "msg": "successFully created Courses ", "data": courses })
    } catch (err) {
        console.log(' error', err);
        res.status(500).send({ "error": true, "msg": "error in creating courses" })
    }
}

const signupAdmin = async (req,res) =>{
    const {  password, username } = req.body
    try {
        const user = await Admin.create({  username,password })
        res.status(201).send({ "error": false, "msg": "successFully created Admin " })
    } catch (err) {
        console.log(' error', err);
        res.status(500).send({ "error": true, "msg": "error in creating admin" })
    }
}


module.exports = {createCourse,signupAdmin}