const mongoose = require('mongoose');

const { Schema, model } = mongoose;

mongoose.connect(process.env.MONGO_URI).then(() => console.log('connected to mongodb')).catch((err) => console.log('err=>', err))

const UserSchema = new Schema({
    'email': String,
    'password': String,
    'username': String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})


const AdminSchema = new Schema({
    "username": String,
    "password": String
})

const CoursesSchema = new Schema({
    "title": String,
    "description": String,
    "price": Number,
    "imageLink": String,
    "published":Boolean

})

const Admin = model('Admin', AdminSchema)
const User = model('User', UserSchema)
const Courses = model('Courses', CoursesSchema)

module.exports = { Admin, User ,Courses}