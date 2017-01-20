//back-end






//front-end
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    userInput = $("#user-input").val();
    var result = (userInput); //posibly change the variable here? confusing
    $("#returnNumList").text(result);
  })
});


//variables:
//form id="enterNum"
//input id="user-input"
//span id="numList"
//input function's result to display="gameResults"
//
