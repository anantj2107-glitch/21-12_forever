const startBtn = document.getElementById("startBtn");
const daysContainer = document.getElementById("daysContainer");
const days = document.querySelectorAll(".day");

startBtn.addEventListener("click", () => {
  daysContainer.classList.remove("hidden");
  unlockDays();
});

function unlockDays() {

  // 🔥 CHANGE THIS DAILY
  const unlockedDay = 1; // change to 2 tomorrow, 3 next day...

  const links = [
    "rose.html",
    "chocolate.html",
    "teddy.html",
    "promise.html",
    "hug.html",
    "kiss.html",
    "valentine.html"
  ];

  for (let i = 0; i < unlockedDay; i++) {
    days[i].classList.remove("locked");
    days[i].classList.add("unlocked");
    days[i].innerHTML = `💖 ${days[i].innerText.replace("🔒","")}`;
    days[i].href = links[i];
  }
}
