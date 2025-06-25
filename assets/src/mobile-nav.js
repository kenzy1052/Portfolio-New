const hamburger = document.getElementById("hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const closeMobileNav = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const body = document.body;
const mobileNavList = document.querySelectorAll(".mobile__nav-menu, .links");

// ✅ Show Menu
function showMenu() {
  mobileNav.classList.add("open");
  overlay.classList.add("show");
  body.style.overflow = "hidden";
}

// ✅ Hide Menu
function hideMenu() {
  mobileNav.classList.remove("open");
  overlay.classList.remove("show");
  body.style.overflow = "auto";
}

// ✅ Open on hamburger click
hamburger.addEventListener("click", showMenu);

// ✅ Close on overlay click
overlay.addEventListener("click", hideMenu);

// ✅ Close on close button click
closeMobileNav.addEventListener("click", hideMenu);

// ✅ Close when a nav link is clicked
mobileNavList.forEach((item) => {
  item.addEventListener("click", hideMenu);
});

// ✅ Touch gesture support (swipe to open/close on small screens)
if (window.innerWidth <= 768) {
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  });

  function handleGesture() {
    const swipeDistance = touchEndX - touchStartX;

    // Swipe from left to right to open (start near left edge)
    if (touchStartX < 50 && swipeDistance > 80) {
      showMenu();
    }

    // Swipe from right to left to close
    if (swipeDistance < -80 && mobileNav.classList.contains("open")) {
      hideMenu();
    }
  }
}
