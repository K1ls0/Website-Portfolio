const Backgrounds = ["#F8F5F2", "#080E1C"];
const Accents = ["#EDB82D", "#D70026"];
const TextPrimary = ["#D70026", "#EDB82D"];
const TextSecondary = ["#770015", "#5d4711"];

function toggleNightMode() {
  console.log("Toggle Nightmode pressed");

  let nightModeState = 0;
  if ($("body").attr("data-night-mode") === "true") {
    nightModeState = 1;
    $("body").attr("data-night-mode", "false");
  } else {
    nightModeState = 0;
    $("body").attr("data-night-mode", "true");
  }

    $(":root").css("--Background", Backgrounds[nightModeState]);
    $(":root").css("--Accents", Accents[nightModeState]);
    $(":root").css("--Text-primary", TextPrimary[nightModeState]);
    $(":root").css("--Text-secondary", TextSecondary[nightModeState]);
}
