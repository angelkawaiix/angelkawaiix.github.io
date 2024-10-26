// Function to fetch comments from the server
async function getComments() {
  try {
    const response = await fetch('/comments');
    const data = await response.json();
    displayComments(data);
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
}

// Function to display comments in the HTML
function displayComments(comments) {
  const commentList = document.getElementById('comment-list');
  commentList.innerHTML = ''; // Clear existing comments

  comments.forEach(comment => {
    const commentElement = document.createElement('div');
    commentElement.innerHTML = `
      <p><strong>${comment.author}:</strong> ${comment.content}</p>
    `;
    commentList.appendChild(commentElement);
  });
}

// Function to handle adding a new comment
async function addComment() {
  const author = document.getElementById('comment-author').value;
  const content = document.getElementById('comment-content').value;

  try {
    const response = await fetch('/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ author, content })
    });

    if (response.ok) {
      // Clear form and refresh comments
      document.getElementById('comment-author').value = '';
      document.getElementById('comment-content').value = '';
      getComments(); // Refresh the comments list
    } else {
      console.error('Error adding comment:', response.status);
    }
  } catch (error) {
    console.error('Error adding comment:', error);
  }
}

// Call getComments initially to load existing comments
getComments();

// Add event listener for the add comment button
document.getElementById('add-comment-button').addEventListener('click', addComment);