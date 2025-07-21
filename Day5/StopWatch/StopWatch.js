var [seconds, minutes, hours] = [0, 0, 0];
var display = document.getElementById("display");
var interval = null;
function updateDisplay() {
  var h = hours < 10 ? "0" + hours : hours;
  var m = minutes < 10 ? "0" + minutes : minutes;
  var s = seconds < 10 ? "0" + seconds : seconds;
display.innerText = h + ":" + m + ":" + s;
}
function timer() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}
function start() {
  if (interval === null) {
    interval = setInterval(timer, 1000);
  }
}
function stop() {
  clearInterval(interval);
  interval = null;
}
function reset() {
  stop();
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
}
updateDisplay();
