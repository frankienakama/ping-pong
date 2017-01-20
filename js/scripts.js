//back-end
var numInput = function isInteger(checkNum) {
  return !isNaN(checkNum);
  };







//front-end
$(document).ready(function() {
  $("form#enterNum").submit(function(event) {
    event.preventDefault();
    var checkNum = parseInt($("input#userNumInput").val());
    var result = numInput(checkNum);

    alert(result);
  });
});



//variables:
//form id="enterNum"
//input id="userNumInput"
//span id="numList"
//var numInput = turns userNumInput into number
