window.addEventListener("load", setUpPage);

function setUpPage () {

  // initialize whatever variables you need and add your event listeners
  // you can (but probably shouldn't) define functions inside this function

};

function changeSquare() {
  var square = document.getElementById("board-tile");
  square.innerHTML("X");
  title.setAttribute("style", "color: blue");
}
