const Notice = require("../model/notice.model")
const express = require("express");
const authenticate = require("../middleware/auth.controller");
const router = express.Router();

router.post("", authenticate, async (req, res) => {
    try {
      const { _id } = req.userID;
      const notice = Notice.create({userID:_id, notices:req.body.notice})

      return res.status(200).send({message:"successfully created"})
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });

module.exports = router