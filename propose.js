const text = "Hey... I have something special to ask you ❤️";
const typing = document.getElementById("typing");
const btn = document.getElementById("openBtn");
const box = document.getElementById("proposalBox");

let i = 0;

function type() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 40);
  } else {
    btn.classList.remove("hidden");
  }
}

type();

btn.addEventListener("click", () => {
  box.classList.remove("hidden");
});

function yes() {
  alert("Yayyy ❤️ You just made me the happiest person alive 😄");
}

