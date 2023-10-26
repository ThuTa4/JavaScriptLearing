const playListContainerTag =
  document.getElementsByClassName("playListContainer")[0];

const currentAndTotleTimeTag = document.getElementsByClassName(
  "currentAndTotleTime"
)[0];

const currentProgressTag = document.getElementById("currentProgress");
const audioTag = document.getElementsByClassName("audioTag")[0];
const playButtonTag = document.getElementsByClassName("playButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const previousButtonTag = document.getElementsByClassName("previousButton")[0];
const nextButtonTag = document.getElementsByClassName("nextButton")[0];

const tracks = [
  { trackId: "Forever Smoke.mp3", title: "Forever smoke - Hyleo" },
  { trackId: "Sunny.mp3", title: "Sunny - Ponder" },
  { trackId: "Dream Eater.mp3", title: "Dream Eater - waveZzz" },
  { trackId: "Trop.mp3", title: "Trop - Ponder" },
];

for (let i = 0; i < tracks.length; i++) {
  const trackTag = document.createElement("div");
  trackTag.addEventListener("click", () => {
    currentPlayingIndex = i;
    playSong();
  });
  trackTag.classList.add("trackItem");
  const title = (i + 1).toString() + ". " + tracks[i].title;
  trackTag.textContent = title;
  playListContainerTag.append(trackTag);
}

let duration = 0;
let durationText = "00:00";
audioTag.addEventListener("loadeddata", () => {
  duration = Math.floor(audioTag.duration);
  durationText = creatMinuteAndSecondText(duration);
});

audioTag.addEventListener("timeupdate", () => {
  const currentTime = Math.floor(audioTag.currentTime);
  const currentTimeText = creatMinuteAndSecondText(currentTime);
  const currentTimeTextAndDurationText = currentTimeText + " / " + durationText;
  currentAndTotleTimeTag.textContent = currentTimeTextAndDurationText;
  updateCurrentProgress(currentTime);
});

const updateCurrentProgress = (currentTime) => {
  const currentProgressWidth = (500 / duration) * currentTime;
  currentProgressTag.style.width = currentProgressWidth.toString() + "px";
};

const creatMinuteAndSecondText = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
  return minuteText + ":" + secondsText;
};

let currentPlayingIndex = 0;
let isPLaying = false;
playButtonTag.addEventListener("click", () => {
  const currentTime = Math.floor(audioTag.currentTime);
  isPLaying = true;
  if (currentTime === 0) {
    playSong();
  } else {
    audioTag.play();
    updatePlayAndPauseButton();
    pauseButtonTag.style.color = "#22ff00";
    nextButtonTag.style.color = "#22ff00";
    previousButtonTag.style.color = "#22ff00";
  }
});

pauseButtonTag.addEventListener("click", () => {
  isPLaying = false;
  audioTag.pause();
  updatePlayAndPauseButton();
});

previousButtonTag.addEventListener("click", () => {
  if (currentPlayingIndex === 0) {
    return;
  }
  currentPlayingIndex--;
  playSong();
});

nextButtonTag.addEventListener("click", () => {
  if (currentPlayingIndex === tracks.length - 1) {
    return;
  }
  currentPlayingIndex++;
  playSong();
});

const playSong = () => {
  const songIdToPlay = tracks[currentPlayingIndex].trackId;
  audioTag.src = songIdToPlay;
  audioTag.play();
  isPLaying = true;
  updatePlayAndPauseButton();
};

const updatePlayAndPauseButton = () => {
  if (isPLaying) {
    playButtonTag.style.display = "none";
    pauseButtonTag.style.display = "inline";
    pauseButtonTag.style.color = "#22ff00";
    nextButtonTag.style.color = "#22ff00";
    previousButtonTag.style.color = "#22ff00";
  } else {
    playButtonTag.style.display = "inline";
    pauseButtonTag.style.display = "none";
    nextButtonTag.style.color = "#fff";
    previousButtonTag.style.color = "#fff";
  }
};
