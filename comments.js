// Create web server
// Create a comment
// Get all comments
// Get a comment by id
// Update a comment by id
// Delete a comment by id

const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// POST /comments
router.post("/", commentController.createComment);

// GET /comments
router.get("/", commentController.getAllComments);

// GET /comments/:id
router.get("/:id", commentController.getCommentById);

// PUT /comments/:id
router.put("/:id", commentController.updateComment);

// DELETE /comments/:id
router.delete("/:id", commentController.deleteComment);

module;
