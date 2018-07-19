function initialize() {
  $(document).ready(function() {
    setColors();
    initializeListener();
  });
}

function initializeListener() {
  $("#toggleDayNight").click(toggleNightMode);

}

function handleClickEvent() {
  console.log("Listener Called");
}
