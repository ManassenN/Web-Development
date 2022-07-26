
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

level = 0

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  checkAnswer(level,userChosenColour);
});

$(document).keypress(function()
{
  if (level === 0){
    nextSequence();
  }

})

// Generating The Next Colour To gamePattern Array.
function nextSequence() {
  level += 1;

  $('#level-title').text("level" + " " +  level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function checkAnswer(level,userChosenColour)
{
  if (userChosenColour == gamePattern[gamePattern.length - 1]) {
    console.log('success');

    // The User Entered The Wrong Answer.
  } else {

    $("body").addClass("game-over");

    setTimeout(function () {

      $("body").removeClass("game-over");

    },200);

    $('h1').text('Game Over, Press A Key To Restart');

    startOver()
  }
  setTimeout(function () {
    nextSequence();
  }, 1000);
  userClickedPattern = []
}


function startOver() {
  level = 0;
  gamePattern = [];
}

function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
