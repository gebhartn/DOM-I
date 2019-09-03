// Variables
let msTens = document.getElementById("msTens");
let msHundreds = document.getElementById("msHundreds");
let ones = document.getElementById("secondOnes");
let tens = document.getElementById("secondTens");
let digits = document.querySelectorAll(".digit");

// Create button function
const createButton = str => {
  const node = document.createElement("div");
  node.style.textAlign = "center";
  const button = document.createElement("button");
  button.textContent = str;
  node.appendChild(button);
  document.querySelector(".digits").appendChild(node);
};

// Show buttons on the DOM
createButton("Start");
createButton("Reset");
const myButtons = document.querySelectorAll("button");

// Start button
myButtons[0].onclick = function() {
  let digits = document.querySelectorAll(".digit");
  digits.forEach(x => (x.style.color = "black"));
  startTimer();
};

// Reset button while not counting
myButtons[1].onclick = function() {
  tens.textContent = "-";
  ones.textContent = "-";
  msTens.textContent = "-";
  msHundreds.textContent = "-";
};

// Start Timer function
const startTimer = () => {
  myButtons[0].disabled = true;
  myButtons[0].style.opacity = "0.6";
  myButtons[0].style.cursor = "default";
  let ms = 0;
  // Set initial values to 0
  const countTime = setInterval(function() {
    tens.textContent = 0;
    ones.textContent = 0;
    msTens.textContent = 0;
    msHundreds.textContent = 0;
    // Button to reset timer
    myButtons[1].onclick = function() {
      tens.textContent = "-";
      ones.textContent = "-";
      msTens.textContent = "-";
      msHundreds.textContent = "-";
      digits.forEach(x => (x.style.color = "black"));
      clearInterval(countTime);
      myButtons[0].disabled = false;
      myButtons[0].style.opacity = "1";
      myButtons[0].style.cursor = "pointer";
      return;
    };
    // Compare lengths of milliseconds to string to print number
    if (ms.toString().length === 1) {
      msTens.textContent = ms.toString();
    }

    if (ms.toString().length === 2) {
      msHundreds.textContent = ms.toString()[0];
      msTens.textContent = ms.toString()[1];
    }

    if (ms.toString().length === 3) {
      ones.textContent = ms.toString()[0];
      msHundreds.textContent = ms.toString()[1];
      msTens.textContent = ms.toString()[2];
    }
    // Round up one millisecond to prevent clock from displaying: 09:99, etc.
    if (ms === 999) {
      tens.textContent = 1;
      ones.textContent = 0;
      msHundreds.textContent = 0;
      msTens.textContent = 0;
      digits.forEach(x => (x.style.color = "red"));
      myButtons[0].disabled = false;
      myButtons[0].style.opacity = "1";
      myButtons[0].style.cursor = "pointer";
      clearInterval(countTime);
    }
    ms++;
  }, 10);
};

myButtons.forEach(function(el) {
  el.style.width = "100px";
  el.style.height = "50px";
  el.style.marginBottom = "10px";
  el.style.color = "white";
  el.style.background = "	#181818";
  el.style.border = "none";
  el.style.textTransform = "uppercase";
  el.style.borderRadius = "15px";
  el.style.cursor = "pointer";
});
