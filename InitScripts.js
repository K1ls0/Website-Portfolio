function initialize() {
  $(document).ready(function() {
    setColors();
    initializeListener();
    readSubSites();
  });
}

function initializeListener() {
  $("#toggleDayNight").click(toggleNightMode);
}

function handleClickEvent() {
  console.log("Listener Called");
}

function readSubSites() {
}
