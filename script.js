let firstColor;
let secondColor;

let firstColorPinned = false;
let secondColorPinned = false;

function toggleFirstPin() {
  firstColorPinned = !firstColorPinned;
  document.getElementById("firstColor").classList.toggle("pinned");
  document.getElementById("firstColor").innerHTML = `${
    firstColorPinned ? "<span class='pinned-open'>p</span>" : "<span></span>"
  } ${firstColor}`;
}

function toggleSecondPin() {
  secondColorPinned = !secondColorPinned;
  document.getElementById("secondColor").classList.toggle("pinned");
  document.getElementById(
    "secondColor"
  ).innerHTML = `${secondColor} - ${secondColorPinned}`;
}

function changeColor() {
  const colors = [
    "lightBlue",
    "AliceBlue",
    "DeepPink",
    "IndianRed",
    "red",
    "grey",
    "lightGreen",
    "coral",
    "crimson",
    "DarkOliveGreen",
    "Aqua",
    "AquaMarine",
    "CadetBlue",
    "Brown",
    "CornflowerBlue",
    "cyan",
    "DarkCyan",
    "Chartreuse",
    "Gold",
    "Indigo",
    "lavender",
    "LightSeaGreen",
    "maroon",
    "MediumVioletRed",
    "OliveDrab",
    "slateGrey",
    "Tomato",
    "yellowGreen",
    "teal",
    "plum",
  ];
  let randomColor = () => colors[Math.floor(Math.random() * colors.length)];

<<<<<<< HEAD
  if (!firstColorPinned) {
    firstColor = randomColor();
  }

  if (!secondColorPinned) {
    secondColor = randomColor();
  }

  while (firstColor == secondColor) {
    secondColor = randomColor();
  }
=======
  let firstColor = randomColor();
  let secondColor = randomColor();
>>>>>>> 79895e02179501ba47e6112bf188734529272b4e

  const makeGradientString = (color1, color2) =>
    `linear-gradient(45deg, ${color1} 0%, ${color2} 100%)`;

<<<<<<< HEAD
  document.getElementById("colorContainer").style.background =
    makeGradientString(firstColor, secondColor);
  document.getElementById(
    "firstColor"
  ).innerHTML = `${firstColor} - ${firstColorPinned}`;
  document.getElementById(
    "secondColor"
  ).innerHTML = `${secondColor} - ${secondColorPinned}`;
}
=======
  //let gradientStyle = makeGradientString(randomColor(), randomColor());

  document.getElementById("colorContainer").style.background =
    makeGradientString(firstColor, secondColor);
  document.getElementById("firstColor").innerHTML = `${firstColor}`;
  document.getElementById("secondColor").innerHTML = `${secondColor}`;
}

// document.getElementById("colorContainer").style.backgroundColor = randomColor;
>>>>>>> 79895e02179501ba47e6112bf188734529272b4e
