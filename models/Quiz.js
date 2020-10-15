const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Please add a title"] },
  description: { type: String },
  questions: [
    {
      questionText: {
        type: String,
        require: [true, "Please add question"],
      },
      answers: [
        {
          answerText: { type: String, require: [true, "Please add answer"] },
          correct: Boolean,
        },
      ],
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  name: { type: String, required: [true, "Please add a name"] },
  ratingData: [
    {
      userId: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
      value: { type: Number, default: 0 },
    },
  ],
  averageRating: { type: Number, default: 0 },
  user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

QuizSchema.pre("save", async function () {
  const average = this.ratingData.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.value;
  }, 0);

  this.averageRating = Math.round(average / this.ratingData.length);
});

module.exports = mongoose.model("quiz", QuizSchema);
