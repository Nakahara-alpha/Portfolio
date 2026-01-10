function updateTime() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const time = new Date();
  const hours = time.getHours();
  const mins = time.getMinutes();
  const meridian = hours >= 12 ? "pm" : "am";
  const hoursDisplay = hours % 12 || 12;
  const minsDisplay = mins < 10 ? "0" + mins : mins;
  const timeText = `${
    days[time.getDay()]
  } ${hoursDisplay}:${minsDisplay} ${meridian}`;
  const timeElement = document.querySelector(".time-text");
  if (timeElement) {
    timeElement.textContent = timeText;
  }
}

updateTime();
setInterval(updateTime, 60000);

const fullscreenBtn = document.querySelector(".fullscreen-btn");
if (fullscreenBtn) {
  fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
}

function skills() {
  const skillsbar = document.querySelectorAll(".skills-progress");
  skillsbar.forEach((bar) => {
    const level = bar.getAttribute("data-level");
    setTimeout(() => {
      bar.style.width = level + "%";
    }, 300);
  });
}

skills();
