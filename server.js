
require('dotenv').config()
console.log(process.env)
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');
// middleware for parsing bodies

app.use(express.json())





app.get('/', (req, res) => {
    res.send('this is akshay server')
})


app.use('/admin',adminRouter);
app.use('/user',userRouter);



app.listen(process.env.PORT, () => {
    console.log('working on',process.env.PORT);
})