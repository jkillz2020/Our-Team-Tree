var submitButton = document.getElementById("submit");
var clearButton = document.getElementById("clear");
var treeElements = document.getElementById("treeHolder");
var line = "";

function validateInputs() {
  if (((document.getElementById("height").value).length == 0) || ((document.getElementById("character").value).length == 0)) {
    alert("Please enter both a height and a character!")
    // return false;
  }
  // else if ((document.getElementById("character").value).length == 0) {
  //   alert("Please enter both a height and a character!")
  //   return false;
  // }
  // else {
  //   buildTree();
  // }
}


function buildTree() {
  validateInputs();
  var treeHeight = document.getElementById("height").value;
  var treeChar = document.getElementById("character").value;
  // var n = treeChar.toString();
  var treeObject = {
    height: treeHeight,
    character: treeChar
  }

  for (var i = 1; i <= treeObject.height; i ++) {
     line=""; 
    for (var j = 0; j <= treeObject.height-i-1; j++) {
      line += "&nbsp";
    }
    for (var j = 1; j<= 2*i - 1; j++) {
      line += treeObject.character;
  }
    treeElements.innerHTML += line + "<br>";
  }
  
}


function clearTree() {
  document.getElementById("height").value = "";
  document.getElementById("character").value = "";
  treeElements.innerHTML= "";
 
}

// submitButton.addEventListener("click", validateInputs);
submitButton.addEventListener("click", buildTree);
clearButton.addEventListener("click", clearTree);

