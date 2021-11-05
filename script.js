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

  let firstColor = randomColor();
  let secondColor = randomColor();

  const makeGradientString = (color1, color2) =>
    `linear-gradient(45deg, ${color1} 0%, ${color2} 100%)`;

  //let gradientStyle = makeGradientString(randomColor(), randomColor());

  document.getElementById("colorContainer").style.background =
    makeGradientString(firstColor, secondColor);
  document.getElementById("firstColor").innerHTML = `${firstColor}`;
  document.getElementById("secondColor").innerHTML = `${secondColor}`;
}

// document.getElementById("colorContainer").style.backgroundColor = randomColor;
