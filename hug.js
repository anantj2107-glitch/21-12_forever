const intro = document.getElementById("intro");
const gallery = document.getElementById("gallery");
const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");

intro.addEventListener("click", () => {
  intro.classList.add("hidden");
  gallery.classList.remove("hidden");
  openLetter.classList.remove("hidden");
});

openLetter.addEventListener("click", () => {
  letter.classList.remove("hidden");
});
