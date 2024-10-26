const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Middleware
app.use(cors());
app.use(express.json());

// Load comments from file (if exists)
let comments = [];
const commentsFile = path.join(__dirname, 'comments.json');
if (fs.existsSync(commentsFile)) {
  comments = JSON.parse(fs.readFileSync(commentsFile, 'utf-8'));
}

// GET all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);

  // Save comments to file
  fs.writeFileSync(commentsFile, JSON.stringify(comments, null, 2));

  res.json({ message: 'Comment added successfully' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});