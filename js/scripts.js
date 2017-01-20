//back-end
var numInput = function(checkNum) {
  if(isNaN(userNumInput)) {
    return false;
  }else{
    return true;
  };
};






//front-end
$(document).ready(function() {
  $("form#enterNum".submit(function(event) {
    event.preventDefault();
    var numInput = parseInt($("input#userNumInput").val());
    var result = numInput
  });
});



//variables:
//form id="enterNum"
//input id="userNumInput"
//span id="numList"
//var numInput = turns userNumInput into number
