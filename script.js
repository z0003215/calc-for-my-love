let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

let clickCount = 0;

function appendToDisplay(value) {
  if (value === "3") {
    clickCount++;
    if (clickCount === 3) {
      display.value += "Love you nony ❤❤❤";
      clickCount = 0; // Reset click count
      return;
    }
  } else {
    clickCount = 0; // Reset click count for other buttons
  }

  display.value += value;
}
