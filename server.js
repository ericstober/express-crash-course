import express from "express";
import path from "path";
import posts from "./routes/posts.js";
const PORT = process.env.PORT || 5000;

const app = express();

// Setup static folder
// app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", posts);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
