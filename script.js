//Audio

const audio = new Audio("alarm.mp3");

// For Minutes:
for (let i = 0; i < 60; i++) {
  mins.innerHTML = mins.innerHTML + `<option value="${i}" id="">${i}</option> `;
}

// For secs:
for (let i = 0; i < 60; i++) {
  secs.innerHTML = secs.innerHTML + `<option value="${i}" id="">${i}</option> `;
}

// For hours:
for (let i = 0; i < 24; i++) {
  hours.innerHTML =
    hours.innerHTML + `<option value="${i}" id="">${i}</option> `;
}

//Timer:
let timer = new Date();
let year = timer.getFullYear();
let month = timer.getMonth() + 1;
let date = timer.getDate();

// 

let rtime;
let realTime = document.getElementById("rTime");

setInterval(() => {
  rtime = new Date();

  let hours = String(rtime.getHours()).padStart(2, '0');
  let minutes = String(rtime.getMinutes()).padStart(2, '0');
  let seconds = String(rtime.getSeconds()).padStart(2, '0');

  realTime.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);


//Audio
function bell() {
  audio.play();
  setTimeout(() => {
    img.src = "img/clock.png";
    para.innerHTML = "🔔 Ghanti Waali Ghadi ⏰";
  }, 10000);
}

const para = document.getElementById("para");
const setAlarm = document.getElementById("btn");
const img = document.getElementById("imgbox");
setAlarm.addEventListener("click", () => {
  alarmDate = new Date(
    `${year}-${month}-${date} ${hours.value}:${mins.value}:${secs.value}`
  );

  timeforAlarm = new Date();

  alarmTime = alarmDate - timeforAlarm;
  console.log(alarmTime);
  if (alarmTime >= 0) {
    alert(`Apka Anokha Alarm Darz Kiya Jaa chuka hai.`);
  } else {
    alert(`Samay se piche chalne ka shauk kyu hai aapko? Sahi se time daalo`);
  }

  if (alarmTime >= 0) {
    setTimeout(() => {
      bell();
      img.src = "img/waking.png";
      para.innerHTML = "Abey Uth jaa chumtiye";
    }, alarmTime);
  }
});

//Clear Alarm
const clearAlarm = document.getElementById("clearAlarm");

clearAlarm.addEventListener("click", () => {
  audio.pause();
  alert("Alarm Cleared");
  img.src = "img/clock.png";
});


// 

// Get the current date
const today = new Date();

// Extract the date, month, and year
const date1 = today.getDate();
const month1 = today.toLocaleString('default', { month: 'long' }); // For full month name
const year1 = today.getFullYear(); // For the year

// Format the date with the month and year
const formattedDate = `${date1} ${month1} ${year1}`;

// Set the innerHTML of the div
document.getElementById('date').innerHTML = formattedDate;

