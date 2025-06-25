const cards = document.querySelectorAll(".portfolio__item");
const modal = document.querySelector(".modal");
const modalSubtitle = document.querySelector(".modal-subtitle");
const modalTitle = document.querySelector(".modal-title");
const modalDescription = document.querySelector(".modal-description");
const modalImage = document.querySelector(".image-modal");
const closeBtn = document.querySelector(".closebtn");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.getAttribute("data-image");
    const subtitle = card.getAttribute("data-subtitle");
    const title = card.getAttribute("data-title");
    const description = card.getAttribute("data-description");

    modalImage.src = img;
    modalSubtitle.textContent = subtitle;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = "flex";
    body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", () => {
  modalImage.src = "";
  modal.style.display = "none";
  body.style.overflow = "auto";
});

// Function to adjust modal alignment based on content height
function adjustModalAlignment() {
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");

  if (!modal || !modalContent) return;

  // Wait for image to load before checking height
  setTimeout(() => {
    const modalHeight = modalContent.offsetHeight;
    const windowHeight = window.innerHeight;

    if (modalHeight + 64 > windowHeight) {
      // If content is taller than screen + padding, align to top
      modal.style.alignItems = "flex-start";
    } else {
      // Otherwise center vertically
      modal.style.alignItems = "center";
    }
  }, 50);
}

// Call it when modal is shown
document.querySelectorAll(".portfolio__item").forEach((item) => {
  item.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "flex";
    adjustModalAlignment();
  });
});

// Optional: Also call on window resize
window.addEventListener("resize", adjustModalAlignment);
