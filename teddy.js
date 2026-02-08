const teddy = document.getElementById("teddy");
const message = document.getElementById("message");

let tapCount = 0;

teddy.addEventListener("click", () => {

  tapCount++;

  // grow every tap
  teddy.style.transform = `scale(${1 + tapCount * 0.6})`;

  // 3rd tap → full hug
  if (tapCount >= 3) {

    teddy.style.position = "fixed";
    teddy.style.top = "50%";
    teddy.style.left = "50%";
    teddy.style.transform = "translate(-50%, -50%) scale(5)";

    message.classList.remove("hidden");

    heartBurst();

    // ⭐ AUTO RESET AFTER 2s
    setTimeout(resetTeddy, 2000);
  }
});


/* ===== Reset teddy back ===== */
function resetTeddy() {

  teddy.style.position = "static";
  teddy.style.top = "";
  teddy.style.left = "";
  teddy.style.transform = "scale(1)";

  tapCount = 0;
}


/* ===== Heart burst ===== */
function heartBurst() {

  for (let i = 0; i < 50; i++) {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.classList.add("burst-heart");

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heart.style.fontSize = (25 + Math.random() * 40) + "px";

    const x = (Math.random() - 0.5) * 800;
    const y = (Math.random() - 0.5) * 800;

    heart.style.transform = `translate(${x}px, ${y}px)`;

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1800);
  }
}
