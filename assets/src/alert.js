const alertBox = document.getElementById("alert");

// Show on page load
alertBox.classList.add("show");

// Automatically hide after 3 seconds
const autoClose = setTimeout(() => {
  closeAlert();
}, 3000);

// Manual close
function closeAlert() {
  alertBox.classList.add("hide");

  // Remove after transition (keep in sync with CSS transition duration)
  setTimeout(() => {
    alertBox.remove();
  }, 500);

  clearTimeout(autoClose); // Stop auto-close if user clicks early
}
