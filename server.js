import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import taskRouter from "./routes/task.route.js";
import boardRouter from "./routes/board.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://script-backend-eq54.onrender.com",
    credentials: true,
  })
);
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import taskRouter from "./routes/task.route.js";
import boardRouter from "./routes/board.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

connectDB();

app.use("/", taskRouter);
app.use("/", boardRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();

app.use("/", taskRouter);
app.use("/", boardRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
