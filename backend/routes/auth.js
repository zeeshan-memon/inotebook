const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post(
  "/",
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
        return res.status(200).json({ errors: errors.array() });
      }

      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(200).json({ message: "User already exists" });
      }
      const salt = await bcrypt.genSalt(10)
      req.body.password = await bcrypt.hash(req.body.password, salt)
      const user = await User.create(req.body);
      const token = jwt.sign({ message: user }, 'shhhhh');
      return res.status(200).json({token});
    } catch (error) {
      console.log("error", error);
      return res.status(200).json({ error: error });
    }
  }
);

module.exports = router;
