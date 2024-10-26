// Get DOM elements
const commentList = document.getElementById('comment-list');
const newCommentForm = document.getElementById('new-comment');
const postCommentButton = document.getElementById('post-comment');

// Function to create and display a new comment
function displayComment(commentText) {
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');
  commentElement.innerHTML = `
    <p>${commentText}</p>
  `;
  commentList.appendChild(commentElement);
}

// Event listener for the "Post Comment" button
postCommentButton.addEventListener('click', () => {
  const commentText = newCommentForm.querySelector('textarea').value.trim();
  if (commentText !== '') {
    displayComment(commentText);
    newCommentForm.querySelector('textarea').value = ''; // Clear the textarea
  }
});