// Milliseconds
let ms = 0;
const countMs = setInterval(function() {
  let msTens = document.getElementById("msTens");
  let msHundreds = document.getElementById("msHundreds");
  if (ms.toString().length > 2) {
    msHundreds.textContent = ms.toString()[1];
    msTens.textContent = ms.toString()[2];
  }
  ms++;
}, 10);

// Seconds

let seconds = 1;
const countSeconds = setInterval(function() {
  let ones = document.getElementById("secondOnes");
  let tens = document.getElementById("secondTens");
  let msTens = document.getElementById("msTens");
  let msHundreds = document.getElementById("msHundreds");
  tens.textContent = 0;
  ones.textContent = 0;
  ones.textContent = seconds;

  seconds++;
  if (seconds >= 11) {
    ones.textContent = 0;
    tens.textContent = 1;
    msTens.textContent = 0;
    msHundreds.textContent = 0;
    ones.style.color = "red";
    tens.style.color = "red";
    msTens.style.color = "red";
    msHundreds.style.color = "red";
    document.getElementById("colon").style.color = "red";
    clearInterval(countSeconds);
    clearInterval(countMs);
  }
}, 1000);
