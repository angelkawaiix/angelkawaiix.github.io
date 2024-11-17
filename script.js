

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

let offsetX, offsetY;

// Select all elements with the class 'draggable'
const draggableElements = document.querySelectorAll('.draggable');

// Loop through each element and add the event listeners
draggableElements.forEach((element) => {
	// Variables to store the offset values
	let offsetX, offsetY;

	// Mouse down event to start dragging
	element.addEventListener('mousedown', function (e) {
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
	draggedElement.style.position = 'fixed';
	draggedElement.style.left = (e.clientX) + 'px';
	draggedElement.style.top = (e.clientY) + 'px';
}

/*************  ✨ Codeium Command 🌟  *************/
// Function to handle mouse up event
function mouseUp() {
	// Remove mousemove and mouseup event listeners
	document.removeEventListener('mousemove', mouseMove);
	document.removeEventListener('mouseup', mouseUp);
}
/******  cd652a9a-604b-4b00-9c8b-097373b15242  *******/

// Create an audio element
var audio = new Audio('sounds/poko.ogg');

// Set the volume to 0.5 (50%)
audio.volume = 0.5;

// Add an event listener to the document for mouse clicks
document.addEventListener('click', function () {
	// Play the sound effect
	audio.play();
	// Reset the audio to play again immediately
	audio.currentTime = 0;
});

// Create an audio element
var closeSound = new Audio('sounds/window_close.ogg');

// Add an event listener to the closewindow button
document.querySelector('.closewindow').addEventListener('click', function () {
	// Play the sound effect
	closeSound.play();
});


const sparklesContainer = document.querySelector('.sparkles-container');
const sparklesImages = [];

// Load all images from the sparkles folder
for (let i = 1; i <= 9; i++) {
	sparklesImages.push(`images/sparkles/internet_sparkle_00${i}.png`);
}

// Set up the animation
let currentImageIndex = 0;

function animateSparkles() {
	const currentImage = sparklesImages[currentImageIndex];
	sparklesContainer.querySelector('.sparkles').src = currentImage;
	currentImageIndex = (currentImageIndex + 1) % sparklesImages.length;
}
setInterval(animateSparkles, 100); // adjust the interval to control the animation speed


const sparklesContainer2 = document.querySelector('.sparkles-container2');
const sparklesImages2 = [];

// Load all images from the sparkles folder
for (let i = 1; i <= 9; i++) {
	sparklesImages2.push(`images/sparkles/internet_sparkle_00${i}.png`);
}

// Set up the animation
let currentImageIndex2 = 0;

function animateSparkles2() {
	const currentImage2 = sparklesImages2[currentImageIndex2];
	sparklesContainer2.querySelector('.sparkles2').src = currentImage2;
	currentImageIndex2 = (currentImageIndex2 + 1) % sparklesImages2.length;
}
setInterval(animateSparkles2, 100); // adjust the interval to control the animation speed

const closeWindowButton = document.querySelector('.closewindow');

closeWindowButton.addEventListener('click', function() {
  const draggableBox = document.querySelector('.draggableBox');
  draggableBox.style.cursor = 'auto';
  draggableBox.style.userSelect = 'auto';
  draggableBox.style.webkitUserSelect = 'auto';
  draggableBox.style.msUserSelect = 'auto';
  draggableBox.draggable = false;
});

// Get all windowbox elements
const windowboxes = document.querySelectorAll('.windowbox');

// Initialize z-index counter
let zIndexCounter = 1;

// Function to bring a windowbox to the front
function bringToFront(windowbox) {
  // Get current z-index
  const currentZIndex = parseInt(windowbox.style.zIndex) || 0;

  // Update z-index counter if necessary
  if (currentZIndex >= zIndexCounter) {
    zIndexCounter = currentZIndex + 1;
  }

  // Set new z-index
  windowbox.style.zIndex = zIndexCounter;
}

// Add event listener to each windowbox
windowboxes.forEach(windowbox => {
  windowbox.addEventListener('click', () => {
    bringToFront(windowbox);
  });

  windowbox.addEventListener('mousedown', () => {
    bringToFront(windowbox);
  });
});

document.querySelector('.internet').addEventListener('click', function() {
	document.querySelector('.badge-icon-internet').remove();
  });

  function playAudio(file) {
	var audio = new Audio(file);
	audio.play();
  }

  const startButton = document.querySelector('.start-button');
const startMenu = document.querySelector('.start-menu');

startButton.addEventListener('click', () => {
  startMenu.classList.toggle('show');
});
