const cards = document.querySelectorAll(".portfolio__item");
const modal = document.querySelector(".modal");
const modalSubtitle = document.querySelector(".modal-subtitle");
const modalTitle = document.querySelector(".modal-title");
const modalDescription = document.querySelector(".modal-description");
const modalImage = document.querySelector(".image-modal");
const closeBtn = document.querySelector(".closebtn");
const modalButton = document.querySelector(".cta-buttons");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.getAttribute("data-image");
    const subtitle = card.getAttribute("data-subtitle");
    const title = card.getAttribute("data-title");
    const description = card.getAttribute("data-description");

    modalButton.innerHTML = `<button class="likebtn btn">
    Like
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2.5"
      stroke="currentColor"
      class="size-6 icon-rose"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
      />
    </svg>
  </button>`;

    if (title === "First Portfolio") {
      modalButton.innerHTML = `<a href="./Portfolio/index.html" target="_blank">
    <button class="viewbtn btn">
      View
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
        class="size-6 icon-rose"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  </a>`;
    }

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
