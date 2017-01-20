//back-end



//front-end
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    result = $("#user-input").val();
    $("#result").text(result);
  })
});

//variables:
//form id="input"
//input id="user-input"
//span id="result"
//function with for loop = "counting"
