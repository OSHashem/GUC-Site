const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const asyncHandler = require('express-async-handler')
const User = require('../model/User')

const protect = asyncHandler(async (req,res,next) => {
    let token;
    console.log(req.cookies);
    console.log(req.cookies.token);
    if (req.cookies && req.cookies.token) {
        try {
            token = req.cookies.token;
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            console.log("Decoded JWT:", decoded);
            req.user = await User.findOne({email:decoded.email}).select('-password')
            req.user.id = decoded.id
            next()
        }
        catch (error){
            console.log(error);
            res.status(401);
            throw new Error('Not authorized');
        }
    }
    else{
        res.status(401);
        console.log("You are not logged in, No token was found");
        throw new Error('You are not logged in, No token was found')
    }
})

const localVariables = asyncHandler(async (req, res, next) =>{
    req.app.locals = {
        OTP : null,
        resetSession : false
    }
    next()
})

module.exports = {protect,localVariables}