const express = require('express');
const router = express.Router();
const {
    login,
    logout,
    generateOTP,
    verifyOTP,
    resetPassword,
    changePassword,
    getUser
} = require('../controller/UserController')
const {protect,localVariables} = require("../middleware/AuthenticationHandler");

router.post('/login',login)
router.post('/logout',protect,logout)

router.post('/generateOTP',localVariables,generateOTP)
router.post('/resetPassword',verifyOTP,resetPassword)
router.post('/changePassword',changePassword)
router.get('/getUser', protect, getUser)
module.exports = router