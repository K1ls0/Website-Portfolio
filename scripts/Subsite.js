var subsiteContent = "";

//TODO
function loadSubsite(evt) {
  let activeSubSite = $("#" + evt.data.target).attr("data-activesubsite");
  readFile("./../subsites/" + evt.data.target + ".shtml");
  console.log(subsiteContent);
  $("#content").html(subsiteContent);
}

function handleSubSites() {

}

//let map = {["home", "subsites/home.shtml"]};
function readFile(filePath) {
  request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE) {
      if (request.status == 200) {
        subsiteContent = request.response;
      } else {
        subsiteContent = "<h1>Error " + request.status + "; Couldn't find Subsite.</h1>";
      }
    }
  };
  request.open("GET", filePath, false);
  request.send();
}
