const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function changeBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

startButton.addEventListener('click', () => {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
  }
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  startButton.disabled = false;
  stopButton.disabled = true;
});
