function initializeListeners() {
  $(document).ready(function() {
    $("#toggleDayNight").on("click", toggleNightMode);
  });
}

function handleClickEvent() {
  console.log("Handled Event");
}
