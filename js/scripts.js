//back-end
var numInput = function isInteger(checkNum) {
  return !isNaN(checkNum);
  };




  $(document).ready(function() {
    $("form").submit(function(event) {
      event.preventDefault();
      userInput = $("#user-input").val();
      $("#returnNumList").text(result);
    })
  });



//variables:
//form id="enterNum"
//input id="userNumInput"
//span id="numList"
//var numInput = turns userNumInput into number
