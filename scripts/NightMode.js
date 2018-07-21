const Backgrounds = ["#F8F5F2", "#080E1C"];
const Accents = ["#EDB82D", "#D70026"];
const TextPrimary = ["#D70026", "#EDB82D"];
const TextSecondary = ["#770015", "#5d4711"];
const normalText = ["#000000", "#FFFFFF"]
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
  $(":root").css("--Accents", Accents[isNightMode]);
  $(":root").css("--Text-primary", TextPrimary[isNightMode]);
  $(":root").css("--Text-secondary", TextSecondary[isNightMode]);

  $("body").css("color", normalText[isNightMode]);

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

  $(".daynightswitch:hover").css("color", normalText[isNightMode]);
}
