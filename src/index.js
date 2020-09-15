const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const spinner = document.getElementById('loader');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
year.textContent = newYearTime.getFullYear();

const updateCountdown = () => {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  
  const day = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minute = Math.floor(diff / 1000 / 60) % 60;
  const second = Math.floor(diff / 1000) % 60;
  
  days.textContent = day;
  hours.textContent = hour < 10 ? `0${hour}` : hour;
  minutes.textContent = minute < 10 ? `0${minute}` : minute;
  seconds.textContent = second < 10 ? `0${second}` : second;
};
setTimeout(() => {
  spinner.remove();
  countdown.style.display = 'flex';
}, 1200);
setInterval(updateCountdown, 1000);

