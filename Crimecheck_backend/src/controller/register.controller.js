const jwt = require("jsonwebtoken")
const User = require("../model/user.model")
const express = require("express");
const router = express.Router();
require("dotenv").config()
const newToken = (user)=>{
    return jwt.sign({user}, process.env.JWT_SECRET_KEY)
}



const register = async (req,res)=>{
    try {
        let user = await User.findOne({user:req.body.user})
        console.log(user)

        if(user){
            return res.status(400).send({message:"user exists"})
        }

        user = await User.create(req.body)

        const token = newToken(user)

        return res.status(200).send({token})
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

router.post("",register)

module.exports = router