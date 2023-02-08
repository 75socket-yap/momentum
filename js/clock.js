const clock = document.querySelector("h2#clock");
const clockDate = document.querySelector("h4#clock-date");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const Seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${Seconds}`;
  clockDate.innerText = date.toDateString();
}

getClock();
setInterval(getClock, 1000);
