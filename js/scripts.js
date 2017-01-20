//back-end



//front-end
$(document).ready(function() {
	$("#english").submit(function(e) {
  	e.preventDefault();  // none of your BS, form
    var word = $("#string").val();  // get the word from the input
    var result = isLatin(word);  // call `isLatin` with the word
    $("#pig").text(result);
  });
});

//variables:
//form id="input"
//input id="user-input"
//span id="result"
//function with for loop = "counting"
