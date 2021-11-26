const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../Middlware/fetchuser");

router.post(
  "/createUser",
  [
    body("email", "Invalid Email").isEmail(),
    // password must be at least 5 chars long
    body("password", "Password length must be greater than 5").isLength({
      min: 5,
    }),
    body("name", "length must be greater than 5").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(200).json({ success:false, message: errors.array()[0].msg });
      }

      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
       return res.status(200).json({success:false, message: "User already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
      const user = await User.create(req.body);
      const token = {
        user: {
          id: user._id,
        },
      };
      // const token = jwt.sign(data, "shhhhh");
      res.status(200).json({ success:true, token });
    } catch (error) {
      console.log("error", error);
      res.status(200).json({ success:false, message: error });
    }
  }
);

router.post(
  "/login",
  [
    body("email", "Invalid Email").isEmail(),
    body("password", "Password can not be blank").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
       return res.status(200).json({success:false, message: errors.array() });
      }

      const user = await User.findOne({ email: req.body.email });
      if (!user) {
       return res
          .status(200)
          .json({success:false, message: "Please try to login with correct credentials." });
      }
      const password = await bcrypt.compare(req.body.password, user.password);
      if (!password) {
       return res
          .status(200)
          .json({success:false, message: "Please try to login with correct credentials." });
      }
      const data = {
        user: {
          id: user._id,
        },
      };
      const token = jwt.sign(data, "shhhhh");
      return res.status(200).json({success:true, token });
    } catch (error) {
      console.log("error", error);
      return res.status(200).json({success:false, message: error });
    }
  }
);

router.post(
  "/getUser",
  [body("id", "id can not be blank").exists()],
  fetchUser,
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(200).json({ errors: errors.array() });
      }

      const user = await User.findById({ _id: req.body.id }).select(
        "-password"
      );
      if (!user) {
        return res.status(200).json({ message: "User not founded." });
      }
      return res.status(200).json({ user });
    } catch (error) {
      console.log("error", error);
      return res.status(200).json({ error: error });
    }
  }
);
module.exports = router;
