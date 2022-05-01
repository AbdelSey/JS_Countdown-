const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const countdown = () => {
  const dueDate = new Date("January 01, 2023 00:00:00").getTime();
  const todayDate = new Date().getTime();

  const dateDiff = dueDate - todayDate;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const textDay = Math.floor(dateDiff / days);
  const textHour = Math.floor((dateDiff % days) / hours);
  const textMinute = Math.floor((dateDiff % hours) / minutes);
  const textSecond = Math.floor((dateDiff % minutes) / seconds);

  day.textContent = textDay;
  hour.textContent = textHour;
  minute.textContent = textMinute;
  second.textContent = textSecond;

  if (dateDiff < 10000) {
    console.log("DEADLINE DUE");
  }
};

setInterval(countdown, 1000);
