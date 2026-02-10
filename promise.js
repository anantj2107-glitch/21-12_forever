const letter = document.getElementById("letter");
const promisesBox = document.getElementById("promises");
const hint = document.getElementById("hint");
const sign = document.getElementById("sign");

const promises = [
  "I promise to hold your hand in every crowd,every hurdle and every step we take together.",
  "I promise to support your every dream and be your biggest fan forever.",
  "I promise to respect you, trust you, and treat you as my queen forever.",
  "I promise to put efforts into us... every single day.",
  "And I promise… to stay. Always ❤️"
];

let index = 0;

letter.addEventListener("click", () => {

  if (index < promises.length) {

    hint.style.display = "none";

    const line = document.createElement("p");
    line.classList.add("promise-line");

    line.innerHTML = `<span class="heart">💗</span>${promises[index]}`;

    promisesBox.appendChild(line);

    index++;
  }

  // show signature at end
  if (index === promises.length) {
    sign.classList.remove("hidden");
  }

});
