const express = require("express")
const { signup, signin, signout } = require("../controllers/user")
const {check, validateResult} = require('express-validator')
const router = express.Router()

router.post('/signup', [
    check("name", "Name atleast should be 3 characters").isLength({min: 3}),
    check("email", "Email should be valid").isEmail(),
    check("password", "Password at least should be 6 characters").isLength({min: 6}),
] ,signup)

router.post('/signin', [
    check("email", "Email should be valid").isEmail(),
    check("password", "Password at least should be 6 characters").isLength({min: 6}),
],signin)

module.exports = router