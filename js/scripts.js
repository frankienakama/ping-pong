//back-end
var numInput = function(checkNum) {
  var checkNum = parseInt("input#userNumInput");
  if(isNaN(checkNum)) {
    return false;
  }else{
    return true;
  };
};






//front-end
$(document).ready(function() {
  $("form#enterNum").submit(function(event) {
    event.preventDefault();
    var numList = ($("input#userNumInput").val());
    var result = numInput(numList);

    alert(result);
  });
});



//variables:
//form id="enterNum"
//input id="userNumInput"
//span id="numList"
//var numInput = turns userNumInput into number
