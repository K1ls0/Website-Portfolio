const RandomColors = ["#00EFFF", "#6400FF", "#FB00FF", "#FF0078", "#FF3100", "#FFA500"]
let ColorCounter = 0;

function ColorChanger() {
  console.log("Mouse over Navtext")

  if (ColorCounter < 5) {
    ColorCounter = ColorCounter + 1;
  } else {
    ColorCounter = 0
  }

  $(":root").css("--navbar", RandomColors[ColorCounter]);
}
