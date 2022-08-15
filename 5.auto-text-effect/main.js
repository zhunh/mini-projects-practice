const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "This is a auto-printer";

let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;
  if (idx > text.length) {
    // idx = 1;
    return;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
  idx = 1;
  writeText()
});
