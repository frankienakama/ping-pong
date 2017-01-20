//back-end
// var numInput = function isInteger(checkNum) {
//   return !isNaN(checkNum);
//   };


//step one - can count

  var counting = [];
  for(var i=1; i<=number; i++) {
    counting.push(i);
  }

  alert(counting);
console.log();

//front-end
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var number = $("#user-input").val();
    // var result = makeList(number);

  });
});



//variables:
//form id="input"
//input id="user-input"
//span id="result"
//function with for loop = makeList
