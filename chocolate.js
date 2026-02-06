const choco = document.getElementById("choco");
const message = document.getElementById("message");
const sweetMsg = document.getElementById("sweetMsg");

const messages = [
  "Life with you is sweeter than chocolate ❤️",
  "Every moment with you melts my heart 🍫",
  "You are my favorite addiction 😄",
  "If kisses were chocolates, I'd give you 100s of them daily 💕",
  "You're the sugar in my life ✨",
  "You're my favorite chocolate😋",
  "Chocolates by your hands tastes 100 times better😌"
];

choco.addEventListener("click", () => {

  // chocolate breaking effect
  choco.innerHTML = "😋🍫";
  message.classList.remove("hidden");

  showRandomMessage();

});

function showRandomMessage() {
  const random = Math.floor(Math.random() * messages.length);
  sweetMsg.innerText = messages[random];
}

function moreSweet() {
  showRandomMessage();
}
