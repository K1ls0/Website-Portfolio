const Backgrounds = ["#fafafa", "#fafafa"];
let isNightMode = 0;

function toggleNightMode() {
  console.log("Toggle Nightmode pressed");

  if ($("body").attr("data-night-mode") === "true") {
    $("body").attr("data-night-mode", "false");
  } else {
    $("body").attr("data-night-mode", "true");
  }
  setColors();
}

function setColors() {
  if ($("body").attr("data-night-mode") == "true") {
    isNightMode = 1;
  } else {
    isNightMode = 0;
  }

  $(":root").css("--Background", Backgrounds[isNightMode]);
  toggleDayNightSwitch();
}

function toggleDayNightSwitch() {
  if (isNightMode === 0) {
    $("span#switch-span.switch-span").html("Night Mode").css("color", "white");
    $("img#icon-daynight").css("filter", "invert(100%)");
  } else {

    $("span#switch-span.switch-span").html("Day Mode").css("color", "black");
    $("img#icon-daynight").css("filter", "invert(0%)");
  }
}
