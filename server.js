const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const log = require("./middleware/log");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });

const app = express();
dbConnect();
app.use(cors());

app.use(log);

app.use(express.json());

app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/quizzes", require("./routes/quizzes"));
app.use("/api/v1/questions", require("./routes/questions"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on the port ${PORT}`));
