const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");
const {
  addQuiz,
  getQuizzesForCurrentUser,
  getQuizzes,
  deleteQuiz,
  getQuizzesByUserId,
  getQuizById,
  updateRaiting
} = require("../controllers/quizzes");

router.post("/add", protect, addQuiz);
router.get("/", protect, getQuizzesForCurrentUser);
router.get("/all", getQuizzes);
router.get("/:userId", protect, getQuizzesByUserId);
router.get("/quiz/:quizId", getQuizById);
router.delete("/:quizId", protect, deleteQuiz);
router.put("/rating/:quizId", protect, updateRaiting);
module.exports = router;
