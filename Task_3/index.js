import express from "express";
import studentRoutes from "./routes/student.routes.js";
const app = express();
app.use(express.json());
app.use("/api/students", studentRoutes);

app.listen(3000, (err) => {
  if (err) {
    return console.error("Error starting server:", err);
  } else {
    console.log("Server is running on port 3000");
  }
});
