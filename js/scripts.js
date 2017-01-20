//back-end
<<<<<<< HEAD
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

=======
var countingArray = function(input) {
    var result = [];
        for(var i=1; i<=input; i++) {
          result.push(i);
        }
    return result;
}



//front-end
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var input = $("#user-input").val();
>>>>>>> counting

    var result = countingArray(input);

    $("#result").text(result);
  })
});
//variables:
//form id="input"
//input id="user-input"
//span id="result"
//function with for loop = "countingArray"
