const express = require("express");
const router = express.Router();

const Notice =  require("../model/notice.model")

router.get("", async (req,res)=>{
    try{
        const notice = await Notice.find({}).populate("userID").lean().exec()
        return res.status(200).send(notice)
    }
    catch(err){
        res.status(400).send({message:err.message})
    }
})

module.exports = router