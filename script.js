// Get elements
const modal = document.getElementById("infoModal");
const img = document.getElementById("infoImage");
const closeBtn = document.querySelector(".close");

// Show the modal when the image is clicked
img.onclick = function() {
  modal.style.display = "block";
}

// Hide the modal when the close button is clicked
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Hide the modal when clicking outside the modal content
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}