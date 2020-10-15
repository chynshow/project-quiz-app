const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");

const { addQuestion, delQuestion } = require("../controllers/questions");

router.post("/add/:quizId", protect, addQuestion);
router.delete("/:quizId/:questionId", protect, delQuestion);

module.exports = router;
