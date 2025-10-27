let startTime;
let elapsedTime = 0;
let timerInterval;
let running = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function timeToString(time) {
  const ms = Math.floor((time % 1000) / 10); // centiseconds
  const totalSec = Math.floor(time / 1000);
  const ss = totalSec % 60;
  const mm = Math.floor(totalSec / 60) % 60;
  const hh = Math.floor(totalSec / 3600);
  const formattedHH = String(hh).padStart(2, "0");
  const formattedMM = String(mm).padStart(2, "0");
  const formattedSS = String(ss).padStart(2, "0");
  const formattedMS = String(ms).padStart(2, "0");
  return ${formattedHH}:${formattedMM}:${formattedSS}.${formattedMS};
}

function start() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = timeToString(elapsedTime);
    }, 50);
    running = true;
  }
}

function pause() {
  clearInterval(timerInterval);
  running = false;
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = "00:00:00.00";
  running = false;
  laps.innerHTML = "";
}

function lap() {
  if (elapsedTime > 0) {
    const li = document.createElement("li");
    li.textContent = Lap - ${timeToString(elapsedTime)};
    laps.appendChild(li);
  }
}

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("pauseBtn").addEventListener("click", pause);
document.getElementById("resetBtn").addEventListener("click", reset);
document.getElementById("lapBtn").addEventListener("click", lap);

// set initial display format
display.textContent = "00:00:00.00";