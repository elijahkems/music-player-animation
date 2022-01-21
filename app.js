const bars = [...document.querySelectorAll(".bar")];

const timer = 200;
let interval;
//create interval
function createInterval() {
  interval = setInterval(() => {
    bars.forEach((bar) => {
      const randomHeight = Math.floor(Math.random() * 80) + 20;
      bar.style.height = randomHeight + "%";
    });
  }, timer);
}
//spacebar key pressed

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 32) {
    const isPaused = bars.some((bar) => bar.classList.contains("playing"));
    //not paused
    if (!isPaused) {
      createInterval();
      bars.forEach((bar) => bar.classList.toggle("playing"));
    } else {
      clearInterval(interval);
      bars.forEach((bar) => bar.classList.toggle("playing"));
    }
  }
});
//init playing
(() => {
  createInterval();
  bars.forEach((bar) => bar.classList.toggle("playing"));
})();
