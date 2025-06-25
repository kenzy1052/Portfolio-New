const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent default page reload
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
      status.style.display = "block";
      status.style.color = "green";
      status.textContent = "🎉 Message sent successfully!";
      setTimeout(() => {
        status.style.display = "none";
      }, 2000);
    } else {
      const data = await response.json();
      status.style.display = "block";
      status.style.color = "red";
      status.textContent = data.errors
        ? data.errors[0].message
        : "Oops! Something went wrong.";
    }
  } catch (error) {
    status.style.display = "block";
    status.style.color = "red";
    status.textContent = "Failed to send. Please try again later.";
  }
});
