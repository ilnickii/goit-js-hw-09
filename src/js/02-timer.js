import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

const dateTimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

function checkStartButtonState() {
  const selectedDate = flatpickr.parseDate(dateTimePicker.value, 'Y-m-d H:i');
  const currentDate = new Date();

  if (selectedDate <= currentDate) {
    startButton.disabled = true;
  } else {
    startButton.disabled = false;
  }
}

flatpickr(dateTimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function (selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      Notify.failure("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      checkStartButtonState();
    }
  },
});

let countdownInterval;

function updateTimer(targetDate) {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    daysValue.textContent = '00';
    hoursValue.textContent = '00';
    minutesValue.textContent = '00';
    secondsValue.textContent = '00';
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  daysValue.textContent = addLeadingZero(days);
  hoursValue.textContent = addLeadingZero(hours);
  minutesValue.textContent = addLeadingZero(minutes);
  secondsValue.textContent = addLeadingZero(seconds);
}

checkStartButtonState();

dateTimePicker.addEventListener('input', checkStartButtonState);

startButton.addEventListener('click', function () {
  if (startButton.disabled) {
    return; 
  }

  const selectedDate = flatpickr.parseDate(dateTimePicker.value, 'Y-m-d H:i');
  const currentDate = new Date();

  if (selectedDate <= currentDate) {
    Notify.failure("Please choose a date in the future");
    return;
  }

  countdownInterval = setInterval(function () {
    updateTimer(selectedDate);
  }, 1000);
});


