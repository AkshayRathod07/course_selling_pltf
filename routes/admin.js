const express = require('express');

const router = express.Router();
const {Admin,User,Courses} = require('../db/index');
const adminMiddleware = require('../middleware/admin');
const {createCourse,signupAdmin} = require('../controller/admin');

// admin signup
router.post('/signup', signupAdmin)

//create course
router.post('/courses',adminMiddleware, createCourse);

module.exports = router

