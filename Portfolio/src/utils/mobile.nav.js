const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");

  let isMobileNavOpen = false;

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
      // console.log(isMobileNavOpen);
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
      // console.log(isMobileNavOpen);
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });

  // headerBtn.addEventListener("click", () => {
  //   if (!isMobileNavOpen) {
  //     mobileNav.style.display = "flex";
  //     document.body.style.overflow = "hidden";
  //     isMobileNavOpen = true;
  //     console.log(isMobileNavOpen);
  //   } else {
  //     mobileNav.style.display = "none";
  //     document.body.style.overflow = "auto";
  //     isMobileNavOpen = false;
  //     console.log(isMobileNavOpen);
  //   }
  // });
};

mobileNav();
