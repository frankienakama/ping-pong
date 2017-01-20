//back-end
var countingArray = function(input) {
    var result = [];
        for(var i=1; i<=input; i++) {
          if (i % 15 === 0) {
            result.push("Ping! Pong!")
          } else if(i % 5 === 0) {
            result.push("Pong!");
          } else if (i % 3 === 0) {
            result.push("Ping!");
          } else {
            result.push(i);
          }
        }
    return result;
}


//front-end
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var input = $("#user-input").val();
    var result = countingArray(input);

    for (var j = 0; j < result.length; j++) {
      $("#result").append("<p>" + result[j] + "</p>")
    };

    $("button").click(function() {
      $("span").empty();
    });
    
  });
});

//variables:
//form id="input"
//input id="user-input"
//span id="result"
//function with for loop = "counting"
