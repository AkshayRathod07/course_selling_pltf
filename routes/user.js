const express = require('express');

const router = express.Router();
const {Admin,User,Courses} = require('../db/index');
const signupUser = require('../controller/user');

router.post('/signup', signupUser)



module.exports = router

