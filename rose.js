const rose = document.getElementById("rose");
const message = document.getElementById("message");

rose.addEventListener("click", () => {
  message.classList.remove("hidden");
  createPetals();
});

function hug() {
  alert("Imagine I'm hugging you tight right now...vo ekdm yours birthday jaisa❤️🫂");
}

function createPetals() {
  for (let i = 0; i < 20; i++) {
    const petal = document.createElement("div");
    petal.innerHTML = "🌸";

    petal.style.position = "absolute";
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.top = "-20px";
    petal.style.fontSize = (30 + Math.random() * 50) + "px";
    petal.style.animationDuration = (3 + Math.random() * 3) + "s";
    petal.style.animation = "fall 4s linear";

    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 4000);
  }
}
