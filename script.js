// Get references to the sidebar elements
const leftSidebar = document.querySelector('.left-sidebar');
const rightSidebar = document.querySelector('.right-sidebar');

// Function to update the background image based on time
function updateSidebarBackground() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 15) {
        leftSidebar.style.backgroundImage = 'url("images/side_bars/bg_side_bar_noon2.png")';
        rightSidebar.style.backgroundImage = 'url("images/side_bars/bg_side_bar_noon2.png")';
    } else if (hour >= 15 && hour < 20) {
        leftSidebar.style.backgroundImage = 'url("images/side_bars/bg_side_bar_evening2.png")';
        rightSidebar.style.backgroundImage = 'url("images/side_bars/bg_side_bar_evening2.png")';
    } else { // 8pm - 6am
        leftSidebar.style.backgroundImage = 'url("images/side_bars/bg_side_bar_night2.png")';
        rightSidebar.style.backgroundImage = 'url("images/side_bars/bg_side_bar_night2.png")';
    }
}

// Call the update function initially
updateSidebarBackground();

// Update the background image every hour using setInterval
setInterval(updateSidebarBackground, 3600000); // 3600000 milliseconds = 1 hour

// Select all elements with the class 'draggable'
const draggableElements = document.querySelectorAll('.draggable');

// Loop through each element and add the event listeners
draggableElements.forEach((element) => {
  // Variables to store the offset values
  let offsetX, offsetY;

  // Mouse down event to start dragging
  element.addEventListener('mousedown', function(e) {
    offsetX = e.clientX - element.getBoundingClientRect().left;
    offsetY = e.clientY - element.getBoundingClientRect().top;

    // Add mousemove and mouseup event listeners
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
  });
});

// Function to handle the mouse move event
function mouseMove(e) {
  // Get the element that is being dragged
  const draggedElement = document.querySelector('.draggable:hover');

  // Make sure the box is positioned absolutely
  draggedElement.style.position = 'absolute';
  draggedElement.style.left = (e.clientX) + 'px';
  draggedElement.style.top = (e.clientY) + 'px';
}

// Function to handle mouse up event
function mouseUp() {
  // Remove mousemove and mouseup event listeners
  document.removeEventListener('mousemove', mouseMove);
  document.removeEventListener('mouseup', mouseUp);
}

// Create an audio element
var audio = new Audio('sounds/poko.ogg');

// Set the volume to 0.5 (50%)
audio.volume = 0.5;

// Add an event listener to the document for mouse clicks
document.addEventListener('click', function() {
  // Play the sound effect
  audio.play();
  // Reset the audio to play again immediately
  audio.currentTime = 0;
});

// Create an audio element
var closeSound = new Audio('sounds/window_close.ogg');

// Add an event listener to the closewindow button
document.querySelector('.closewindow').addEventListener('click', function() {
  // Play the sound effect
  closeSound.play();
});

