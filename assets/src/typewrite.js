class TypeWriter {
  constructor(element, words, delay = 2000) {
    this.element = element;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.delay = parseInt(delay, 10);
    this.isDeleting = false;
    this.type();
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.element.innerHTML = `<span class="typing">${this.txt}</span>`;

    let typeSpeed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.delay;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 300;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".typewrite");
  const words = JSON.parse(el.getAttribute("data-words"));
  const delay = el.getAttribute("data-delay");
  new TypeWriter(el, words, delay);
});
