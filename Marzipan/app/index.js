import clock from "clock";
import document from "document";

// Update the clock every minute
clock.granularity = "seconds";

// Time elements
let separator = document.getElementById("separator");
let hours1 = document.getElementById("hours1");
let hours2 = document.getElementById("hours2");
let mins1 = document.getElementById("mins1");
let mins2 = document.getElementById("mins2");

// Update the <text> element with the current time
function updateClock() {
  var today = new Date();
  
  // HOURS
  let hour = ("0" + today.getHours()).slice(-2);
  setHours(hour);

  // MINUTES
  let minute = ("0" + today.getMinutes()).slice(-2);
  setMins(minute);

  // BLINK SEPARATOR
  setSeparator(today.getSeconds());
}

// Blink time separator
function setSeparator(val) {
  separator.style.display = (val % 2 === 0 ? "inline" : "none");
}

function setHours(val) {
  drawDigits("", val, hours1, hours2);
}

function setMins(val) {
  drawDigits("", val, mins1, mins2);
}

function drawDigits(prefix, val, place1, place2) {
  place1.href = prefix + Math.floor(val / 10) + ".png";
  place2.href = prefix + Math.floor(val % 10) + ".png";
}

// Update the clock every tick event
clock.ontick = () => updateClock();

// Don't start with a blank screen
updateClock();
