const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

// Updated function names and ID
function showDialog() {
  document.getElementById("successDialog").classList.add("show");
}

function closeDialog() {
  document.getElementById("successDialog").classList.remove("show");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      showDialog(); // Call the updated function
    } else {
      const data = await response.json();
      if (status) {
        status.style.display = "block";
        status.style.color = "red";
        status.textContent = data.errors
          ? data.errors[0].message
          : "Oops! Something went wrong.";
      }
    }
  } catch (error) {
    if (status) {
      status.style.display = "block";
      status.style.color = "red";
      status.textContent = "Failed to send. Please try again later.";
    }
  }
});
