// create start button
const createButton = str => {
  const node = document.createElement("div");
  node.style.textAlign = "center";
  const button = document.createElement("button");
  button.textContent = str;
  node.appendChild(button);
  document.querySelector(".digits").appendChild(node);
};

createButton("Start");
createButton("Reset");
const myButtons = document.querySelectorAll("button");

myButtons[0].onclick = function() {
  let digits = document.querySelectorAll(".digit");
  digits.forEach(x => (x.style.color = "black"));
  myButtons[0].disabled = true;
  startTimer();
  return setInterval(function() {
    myButtons[0].disabled = false;
  }, 10000);
};

const startTimer = () => {
  let ms = 0;

  const countTime = setInterval(function() {
    let msTens = document.getElementById("msTens");
    let msHundreds = document.getElementById("msHundreds");
    let ones = document.getElementById("secondOnes");
    let tens = document.getElementById("secondTens");
    let digits = document.querySelectorAll(".digit");

    tens.textContent = 0;
    ones.textContent = 0;
    msTens.textContent = 0;
    msHundreds.textContent = 0;

    myButtons[1].onclick = function() {
      ms = -10;
      myButtons[0].disabled = false;
    };

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

    if (ms === 999) {
      tens.textContent = 1;
      ones.textContent = 0;
      msHundreds.textContent = 0;
      msTens.textContent = 0;
      digits.forEach(x => (x.style.color = "red"));
      clearInterval(countTime);
    }

    if (ms === -10) {
      tens.textContent = "-";
      ones.textContent = "-";
      msTens.textContent = "-";
      msHundreds.textContent = "-";
      clearInterval(countTime);
    }

    ms++;
  }, 10);
};
