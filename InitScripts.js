function initialize() {
  $(document).ready(function() {
    setColors();
    initializeListener();
  });
}

function initializeListener() {
  $("#toggleDayNight").on("click", toggleNightMode);
}

function handleClickEvent() {
  console.log("Handled Event");
}
