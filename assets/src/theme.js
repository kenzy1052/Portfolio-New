const themeToggleBtns = document.querySelectorAll(".theme-toggle");
const darkTheme = `<svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="#1C274C"
              ></path>
            </g>
          </svg>`;

const lightTheme = `<svg
            version="1.0"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
            xml:space="preserve"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <circle fill-rule="evenodd" clip-rule="evenodd" fill="#231F20" cx="32.003" cy="32.005" r="16.001"></circle>
                <path fill-rule="evenodd" clip-rule="evenodd" fill="#231F20" d="M12.001,31.997c0-2.211-1.789-4-4-4H4c-2.211,0-4,1.789-4,4 s1.789,4,4,4h4C10.212,35.997,12.001,34.208,12.001,31.997z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" fill="#231F20" d="M12.204,46.139l-2.832,2.833c-1.563,1.562-1.563,4.094,0,5.656 c1.562,1.562,4.094,1.562,5.657,0l2.833-2.832c1.562-1.562,1.562-4.095,0-5.657C16.298,44.576,13.767,44.576,12.204,46.139z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" fill="#231F20" d="M32.003,51.999c-2.211,0-4,1.789-4,4V60c0,2.211,1.789,4,4,4 s4-1.789,4-4l-0.004-4.001C36.003,53.788,34.21,51.999,32.003,51.999z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" fill="#231F20" d="M51.798,46.143c-1.559-1.566-4.091-1.566-5.653-0.004 s-1.562,4.095,0,5.657l2.829,2.828c1.562,1.57,4.094,1.562,5.656,0s1.566-4.09,0-5.656L51.798,46.143z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" fill="#231F20" d="M60.006,27.997l-4.009,0.008 c-2.203-0.008-3.992,1.781-3.992,3.992c-0.008,2.211,1.789,4,3.992,4h4.001c2.219,0.008,4-1.789,4-4 C64.002,29.79,62.217,27.997,60.006,27.997z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" fill="#231F20" d="M51.798,17.859l2.828-2.829c1.574-1.566,1.562-4.094,0-5.657 c-1.559-1.567-4.09-1.567-5.652-0.004l-2.829,2.836c-1.562,1.555-1.562,4.086,0,5.649C47.699,19.426,50.239,19.418,51.798,17.859z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" fill="#231F20" d="M32.003,11.995c2.207,0.016,4-1.789,4-3.992v-4 c0-2.219-1.789-4-4-4c-2.211-0.008-4,1.781-4,3.993l0.008,4.008C28.003,10.206,29.792,11.995,32.003,11.995z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" fill="#231F20" d="M12.212,17.855c1.555,1.562,4.079,1.562,5.646-0.004 c1.574-1.551,1.566-4.09,0.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657,0c-1.575,1.559-1.575,4.09-0.012,5.653 L12.212,17.855z"></path>
              </g>
            </g>
          </svg>`;

let savedTheme = localStorage.getItem("theme");
let isLightTheme;

function updateThemeIcons(isLight) {
  themeToggleBtns.forEach((btn) => {
    btn.innerHTML = isLight ? darkTheme : lightTheme;
    // if (isLight) {
    //   btn.innerHTML = darkTheme;
    // } else {
    //   btn.innerHTML = lightTheme;
    // }
  });
}

if (savedTheme === "light") {
  isLightTheme = savedTheme === "light";
} else {
  isLightTheme = !window.matchMedia("(prefers-color-scheme: dark)").matches;
}

document.body.classList.toggle("light-mode", isLightTheme);

updateThemeIcons(isLightTheme);

themeToggleBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");

    updateThemeIcons(isLight);
  })
);

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      const isLight = !e.matches;
      document.body.classList.toggle("light-mode", isLight);
      updateThemeIcons(isLight);
    }
  });
