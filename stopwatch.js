const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const containueButtonTag =
  document.getElementsByClassName("containueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];
const stopWatchTag2 = document.getElementsByClassName("stopWatch2")[0];

let milliseconds = 0,
  seconds = 0,
  minutes = 0,
  hours = 0;

const startTime = () => {
  milliseconds++;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
  const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const hourText = hours < 10 ? "0" + hours.toString() : hours;
  const millisecondText =
    milliseconds < 100 ? "0" + millisecondText.toString() : milliseconds;
  stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText;
  stopWatchTag2.textContent = millisecondText;
};

let intervalId;
startButtonTag.addEventListener("click", () => {
  intervalId = setInterval(startTime, 1);
});

pauseButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
});

containueButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 1);
});
//Test
restartButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  (seconds = 0), (minutes = 0), (hours = 0), (milliseconds = 0);
  intervalId = setInterval(startTime, 1);
});
