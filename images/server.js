const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

// In-memory database (for simplicity)
const comments = [];

// Serve static files (index.html, style.css, etc.)
app.use(express.static('public')); // Assuming your files are in a 'public' folder

// Handle POST requests for new comments
app.post('/comments', (req, res) => {
  const commentText = req.body.comment;
  if (commentText) {
    comments.push({ text: commentText });
    res.json({ message: 'Comment added!' }); 
  } else {
    res.status(400).json({ error: 'Comment cannot be empty.' });
  }
});

// Handle GET requests to retrieve all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Get DOM elements
const commentList = document.getElementById('comment-list');
const newCommentForm = document.getElementById('new-comment');
const postCommentButton = document.getElementById('post-comment');

// Function to display a new comment
function displayComment(commentText) {
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');
  commentElement.innerHTML = `<p>${commentText}</p>`;
  commentList.appendChild(commentElement);
}

// Fetch comments from the server and display them
function loadComments() {
  fetch('/comments') 
    .then(response => response.json())
    .then(comments => {
      comments.forEach(comment => displayComment(comment.text));
    })
    .catch(error => console.error('Error loading comments:', error));
}

// Event listener for the "Post Comment" button
postCommentButton.addEventListener('click', () => {
  const commentText = newCommentForm.querySelector('textarea').value.trim();
  if (commentText !== '') {
    fetch('/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment: commentText })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to add comment.');
        }
      })
      .then(data => {
        console.log(data.message);
        newCommentForm.querySelector('textarea').value = '';
        loadComments(); // Refresh the comments
      })
      .catch(error => console.error('Error adding comment:', error));
  }
});

// Load initial comments on page load
loadComments();