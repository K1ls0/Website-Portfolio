function loadSubsite() {
  let activeSubSite = $("#content").attr("data-activesubsite");

  let subsiteText = readFiles("subsites/home.shtml");
  $("#content").html(subsiteText);
}

//let map = {["home", "subsites/home.shtml"]};
//TODO
function readFiles(filePath) {

}
