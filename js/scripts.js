//back-end
var numInput = "userNumInput";

var checkInt = function() {
  if(isNaN(numInput)) {
    return false;
  }else{
    return true;
  };
};






//front-end
$(document).ready(function() {
  $("form#enterNum".submit(function(event)) {
    even.prevenDefault();
    var numInput = parseInt($("input#userNumInput").val());
    var result = numInput

    $("#returnNumList").show());
  });



//variables:
//form id="enterNum"
//input id="userNumInput"
//span id="numList"
//
