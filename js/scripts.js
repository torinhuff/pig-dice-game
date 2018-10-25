// // biz logic
function Player(name) {
  this.name = name;
  this.roll = 0;
  this.currentTotal = 0;
  this.overallTotal = 0;
}

var p1 = new Player("Mike");
var p2 = new Player("Torin");

Player.prototype.makeRandom = function() {
  this.roll = Math.floor(Math.random() * 6) + 1;


  // else if (p1.roll === 1){
  //   $(".turnMarker1").css({'border':'2px solid red'});
  //   $(".turnMarker2").css({'border':'2px solid green'});
  // } else if (p2.roll === 1) {
  //   $(".turnMarker2").css({'border':'2px solid red'});
  //   $(".turnMarker1").css({'border':'2px solid green'});
  // }


  if (this.roll > 1){
    return this.currentTotal += this.roll;
  } else {
     alert("your turn is over");
     return this.currentTotal = 0;
  }
}



Player.prototype.makeHold = function(){
  this.overallTotal += this.currentTotal;
  this.currentTotal = 0;
    if (this.overallTotal >= 100) {
      alert("You Won");
      p1.overallTotal = 0;
      p2.overallTotal = 0;
      p1.currentTotal = 0;
      p2.currentTotal = 0;
      }
}

function switchTurns() {
  if (p1.roll === 1) {
    $(".turnMarker2").css({'border':'2px solid green'});
    $(".turnMarker1").css({'border':'2px solid red'});
  } if (p2.roll === 1){
    $(".turnMarker2").css({'border':'2px solid red'});
    $(".turnMarker1").css({'border':'2px solid green'});
  }
}


// user logic
$(document).ready(function() {
  // p1 roll button
  $("#p1rollButton").click(function() {

  p1.makeRandom();
  $("#p1CurrentScore").text(" " + p1.currentTotal);
  $(".turnMarker2").css({'border':'2px solid red'});
  $(".turnMarker1").css({'border':'2px solid green'});
  switchTurns();
console.log(p1);
  });
  // p1 end of roll button
  // p1 hold button
  $("#p1holdButton").click(function() {

  p1.makeHold();
  $("#p1Score").text(" " + p1.overallTotal);
  $("#p1CurrentScore").text(" " + "0");
  $(".turnMarker2").css({'border':'2px solid green'});
  $(".turnMarker1").css({'border':'2px solid red'});
console.log(p1);
  });
  // p1 end of hold button

  // ------------------------------------------

  // p2 roll button
  $("#p2rollButton").click(function() {

  p2.makeRandom();
  $("#p2CurrentScore").text(" " + p2.currentTotal);
  $(".turnMarker2").css({'border':'2px solid green'});
  $(".turnMarker1").css({'border':'2px solid red'});
  switchTurns();
console.log(p2);
  });
  // p2 end of roll button
  // p2 hold button
  $("#p2holdButton").click(function() {

  p2.makeHold();
  $("#p2Score").text(" " + p2.overallTotal);
  $("#p2CurrentScore").text(" " + "0");
  $(".turnMarker2").css({'border':'2px solid red'});
  $(".turnMarker1").css({'border':'2px solid green'});

console.log(p2);
  // p2 end of hold button
  });

});
