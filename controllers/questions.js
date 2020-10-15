const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const Quiz = require("../models/Quiz");

exports.addQuestion = asyncHandler(async (req, res, next) => {
  const { questionText, answers } = req.body.questionItem;

  let quiz = await Quiz.findById(req.params.quizId);

  if (!quiz) return next(new ErrorResponse("Quiz not found!", 404));

  quiz.questions = [{ questionText, answers: [...answers] }, ...quiz.questions];

  await quiz.save();

  res.status(200).json({ questions: quiz.questions });
});

exports.delQuestion = asyncHandler(async (req, res, next) => {
  let quiz = await Quiz.findById(req.params.quizId);

  if (!quiz) return next(new ErrorResponse("Quiz not found!", 404));

  quiz.questions = quiz.questions.filter(
    (q) => q._id.toString() !== req.params.questionId
  );

  await quiz.save();

  res.status(200).json({ questions: quiz.questions });
});
