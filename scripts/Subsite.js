var subsiteContent = "";

function loadSubsite() {
  let activeSubSite = $("#content").attr("data-activesubsite");
  readFile("./../subsites/home.shtml");
  console.log(subsiteContent);
  $("#content").html(subsiteContent);
}

function handleSubSites() {

}

//let map = {["home", "subsites/home.shtml"]};
//TODO
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
  request.open("GET", filePath, true);
  request.send();
}
