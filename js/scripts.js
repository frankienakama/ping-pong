//back-end
var counting = [];
for(var i=1; i<=input; i++) {
  counting.push(i);
}

alert(counting);


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
