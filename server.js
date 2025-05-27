const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();

// Setup static folder
// app.use(express.static(path.join(__dirname, "public")));

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
