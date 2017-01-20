//back-end

var counting = [];
for(var i=1; i<=input; i++) {
  counting.push(i);
}

alert(counting);

var input = parseInt("input#user-input");

//front-end
$(document).ready(function() {
  $("form#input").submit(function(event) {

    var result = counting(input);
    $("span#result").show(result);
  });
});


//variables:
//form id="input"
//input id="user-input"
//span id="result"
//function with for loop = "counting"
