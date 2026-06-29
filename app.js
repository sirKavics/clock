const secondHandle = document.querySelector(".handle__second");
const minuteHandle = document.querySelector(".handle__minute");
const hourHandle = document.querySelector(".handle__hour");

setInterval(() => {
    setHandles()
},1000)

function setHandles() {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // 60 seconds in a minute
  // One minute increments by 6 degrees
  // 6 / 60
  const extraMinutesAngle = seconds * 0.1;
  const minutesAngle = minutes * 6 + extraMinutesAngle;

  const extraHoursAngle = minutes * 0.5;
  const hoursAngle = hours * 30 + extraHoursAngle;

  secondHandle.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
  minuteHandle.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;
  hourHandle.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`;
}

// PRACTICE RUN

const millisecondsHandle = document.querySelector(".handle__milliseconds");
const secondsHandle = document.querySelector(".handle__second");
const minutesHandle = document.querySelector(".handle__minute");
const hoursHandle = document.querySelector(".handle__hour");

requestAnimationFrame(setHandles);

function setHandles() {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  // hour is 60 minutes
  // hour increments by 6 degrees
  // 60 / 6 = 0.1
  const extraHourAngle = minutes * 0.1;
  const hourAngle = hours * 30 + extraHourAngle;

  const extraMinutesAngle = seconds * 0.1;
  const minuteAngle = minutes * 6 + extraMinutesAngle;

  const secondsAngle = seconds * 6;
  const millisecondsAngle = milliseconds * 0.36;

  hoursHandle.style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;
  minutesHandle.style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;
  secondsHandle.style.transform = `translateX(-50%) rotate(${secondsAngle}deg)`;
  millisecondsHandle.style.transform = `translateX(-50%) rotate(${millisecondsAngle}deg)`;

  requestAnimationFrame(setHandles);
}
