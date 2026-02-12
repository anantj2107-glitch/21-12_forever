const envelope = document.getElementById("envelope");

const meaning = document.getElementById("meaning");
const continueBtn = document.getElementById("continueBtn");

const kissSection = document.getElementById("kissSection");
const meaningLeft = document.getElementById("meaningLeft");

const kissBack = document.getElementById("kissBack");


// Step 1 → show meaning box
envelope.addEventListener("click", () => {
  envelope.classList.add("hidden");
  meaning.classList.remove("hidden");
});


// Step 2 → move to side layout
continueBtn.addEventListener("click", () => {

  // copy content into small left box
  meaningLeft.innerHTML = meaning.innerHTML;

  meaning.classList.add("hidden");
  kissSection.classList.remove("hidden");
  meaningLeft.classList.remove("hidden");
  letter.classList.remove("hidden");


  createHearts(12);
});


// Step 3 → kiss back hearts
kissBack.addEventListener("click", () => {
  createHearts(25);
});


function createHearts(number) {
  for (let i = 0; i < number; i++) {

    const heart = document.createElement("div");
    heart.innerHTML = "💗";
    heart.classList.add("heart");

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

