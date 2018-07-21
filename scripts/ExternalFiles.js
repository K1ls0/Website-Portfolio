var cInsertText = "";

//TODO
function insertExternalFiles() {
  ($("#externalFile")).each(function() {
    readFile($(this).attr("data-filepath"), true, this, insertToHtml);
  })

}

function insertToHtml(tag, dataString) {
  $(tag).html(dataString);
}


//let map = {["home", "subsites/home.shtml"]};
function readFile(filePath, asynchronous, cTag, callback) {
  request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE) {
      if (request.status == 200) {
        //TODO add advanced splitter (Body/ Head)
        callback(cTag, request.response);
      } else {
        callback(cTag, "<h1>Error " + request.status + "; Couldn't find Subsite.</h1>");
      }
    }
  };
  request.open("GET", filePath, asynchronous);
  request.send();
}
