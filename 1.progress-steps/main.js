const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const steps = document.querySelectorAll(".circle");
const processBar = document.querySelector(".progress");

let curActive = 0;
prev.addEventListener("click", function () {
  if (curActive > 0) {
    curActive--;
  }
  update();
});

next.addEventListener("click", function () {
  if (curActive < steps.length - 1) {
    curActive++;
  }
  update();
});

function update() {
  steps.forEach((step, idx) => {
    if (idx <= curActive) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  processBar.style.width =
    ((actives.length - 1) / (steps.length - 1)) * 100 + "%";

  if (curActive === 0) {
    prev.disabled = true;
  } else if (curActive === steps.length - 1) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
