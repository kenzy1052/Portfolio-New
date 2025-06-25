const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll("#theme-toggle");

  //state
  const theme = localStorage.getItem("theme");

  //on mount
  theme && document.body.classList.add(theme);
  //The && operator signify that if and only if the theme variable is truthy, do we set the theme to the value from the localstorage.

  //handlers
  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
    }
  };

  // Events
  themeToggleBtns.forEach((btn) => {
    btn.addEventListener("click", handleThemeToggle);
  });
};

darkMode();
