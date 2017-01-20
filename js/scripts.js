//back-end





//front-end
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var input = $("#user-input").val();

    var counting = [];
    for(var i=1; i<=input; i++) {
      counting.push(i);
    }

    $("#result").text(counting);

    alert(counting);
  })
});

//variables:
//form id="input"
//input id="user-input"
//span id="result"
//function with for loop = "counting"
