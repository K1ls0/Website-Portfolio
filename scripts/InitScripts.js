function initialize() {
  $(document).ready(function() {
    setColors();
    initializeListener();
    loadSubSite();
  });
}

function initializeListener() {
  $("#toggleDayNight").click(toggleNightMode);
  $("#home").click({target: "home"}, loadSubsite);
  $("#about").click({target: "about"}, loadSubsite);
  $("#portfolio").click({target: "portfolio"}, loadSubsite);
  $("#contact").click({target: "contact"}, loadSubsite);
}

function handleClickEvent() {
  console.log("Listener Called");
}
