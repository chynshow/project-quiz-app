const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const Quiz = require("../models/Quiz");
const User = require("../models/User");

exports.addQuiz = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body;
  const user = await User.findById(req.user.id);
  const quiz = await Quiz.create({
    title,
    description,
    user: req.user.id,
    name: user.name,
  });
  res.status(200).json({ quiz });
});

exports.getQuizzesForCurrentUser = asyncHandler(async (req, res, next) => {
  const quizzes = await Quiz.find({ user: req.user.id });
  if (!quizzes)
    return next(new ErrorResponse("Quizzes not found for current user", 404));
  res.status(200).json({ quizzes });
});

exports.getQuizzes = asyncHandler(async (req, res, next) => {
  const quizzes = await Quiz.find();
  if (!quizzes) return next(new ErrorResponse("Quizzes not found", 404));
  res.status(200).json({ quizzes });
});

exports.getQuizzesByUserId = asyncHandler(async (req, res, next) => {
  const quizzes = await Quiz.find({ user: req.params.userId });
  if (!quizzes) return next(new ErrorResponse("Quizzes not found", 404));
  res.status(200).json({ quizzes });
});

exports.getQuizById = asyncHandler(async (req, res, next) => {
  const quiz = await Quiz.findById(req.params.quizId);
  if (!quiz) return next(new ErrorResponse("Quiz not found", 404));
  res.status(200).json({ quiz });
});

exports.deleteQuiz = asyncHandler(async (req, res, next) => {
  const quiz = await Quiz.findByIdAndDelete(req.params.quizId);
  res.status(200).json({ quiz });
});

exports.updateRaiting = asyncHandler(async (req, res, next) => {
  let quiz = await Quiz.findById(req.params.quizId);
  if (!quiz) return next(new ErrorResponse("Quiz not found", 404));

  if (
    quiz.ratingData.filter((r) => r.userId.toString() === req.user.id).length
  ) {
    const removeItem = quiz.ratingData
      .map((r) => r.userId.toString())
      .indexOf(req.user.id);

    quiz.ratingData.splice(removeItem, 1, {
      userId: req.user.id,
      value: req.body.quizRating,
    });

    await quiz.save();

    return res.status(200).json({ quiz });
  }

  quiz.ratingData = [
    ...quiz.ratingData,
    { userId: req.user.id, value: req.body.quizRating },
  ];
  await quiz.save();

  res.status(200).json({ quiz });
});
