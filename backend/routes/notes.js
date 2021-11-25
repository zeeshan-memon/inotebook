const express = require("express");
const router = express.Router();
const fetchUser = require("../Middlware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    if (!notes) {
      res.status(200).json({ message: "Notes not founded." });
    }
    res.status(200).json({ notes });
  } catch (error) {
    console.log("error", error);
    res.status(200).json({ error: error });
  }
});

router.post(
  "/addnotes",
  [
    body("title", "Enter valid title").isLength({ min: 3 }),
    // password must be at least 5 chars long
    body("description", "description length must be greater than 5").isLength({
      min: 5,
    }),
  ],
  fetchUser,
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(200).json({ errors: errors.array() });
      }
      const { title, description, tag } = req.body;
      const notes = await Notes.create({
        title,
        description,
        tag,
        user: req.user.id,
      });
      res.status(200).json({ notes });
    } catch (error) {
      console.log("error", error);
      res.status(200).json({ error: error });
    }
  }
);

router.put(
  "/updatenote/:id?",
  [
    body("title", "Enter valid title").isLength({ min: 3 }),
    // password must be at least 5 chars long
    body("description", "description length must be greater than 5").isLength({
      min: 5,
    }),
  ],
  fetchUser,
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(200).json({ errors: errors.array() });
      }
      const { title, description, tag } = req.body;
      const newNote = {};
      if (title) {
        newNote.title = title;
      }
      if (description) {
        newNote.description = description;
      }
      if (tag) {
        newNote.tag = tag;
      }
      let note = await Notes.findById(req.params.id);
      if (!note) {
        return res.status(200).send("Note not founded");
      }
      if (note.user.toString() !== req.user.id) {
        return res.status(200).send("Not allowed");
      }
      note = await Notes.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );
      res.status(200).json({ note });
    } catch (error) {
      console.log("error", error);
      res.status(200).json({ error: error });
    }
  }
);

router.delete(
  "/deletenote/:id?",
  fetchUser,
  async (req, res) => {
    try {
    
      let note = await Notes.findById(req.params.id);
      if (!note) {
        return res.status(200).send("Note not founded");
      }
      if (note.user.toString() !== req.user.id) {
        return res.status(200).send("Not allowed");
      }
      note = await Notes.findByIdAndDelete(req.params.id);
      res.status(200).json({note});
    } catch (error) {
      console.log("error", error);
      res.status(200).json({ error: error });
    }
  }
);

module.exports = router;
