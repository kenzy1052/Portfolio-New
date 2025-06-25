const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");

    document.getElementById(tab.dataset.tab).classList.add("active");

    if (tab.dataset.tab === "skills") {
      const progress = document.querySelectorAll(".progress-range");
      progress.forEach((prog) => {
        prog.style.width = "0%";

        setTimeout(() => {
          prog.style.width = prog.dataset.progress + "%";
        }, 100);
      });
    }
  });
});
