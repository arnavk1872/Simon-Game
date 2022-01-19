//part-1    ( arrays defined , start at level 0 , telling the code to run nextseq fn again if started)
var buttonColors = ["red","blue","green","yellow"];

var gamePattern =[];

var userClickedPattern =[];

var started=false;
var level=0;

$(document).click(function(){   //game starts
    if(!started){
      $("#level-title").text("level "+level);//changes levels as game progresses
      nextSequence();
      started=true;

      return;
    }
    
});

function nextSequence(){

  userClickedPattern = [];

  level++;              // randomly chooses a color and assingns it to a number 

  $("#level-title").text("level "+level);// level increses when called again

    var randomNum = Math.random();
    randomNum=(randomNum*3)+1;
    randomNum=Math.floor(randomNum);

  var randomChosencolor = buttonColors[randomNum];

gamePattern.push(randomChosencolor);

$("#"+randomChosencolor).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosencolor);

}
 //document.queryselector()

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");//DOM

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});


function playSound(name){
  var audio = new Audio("sounds/"+ name + ".mp3"); // fn's defined and called inside the DOM part
  audio.play();
}

function animatePress(currentColor) {
$("#"+ currentColor).addClass("pressed");

setTimeout(function () {
  $("#"+ currentColor).removeClass("pressed");
},100);
}

  
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
  

   if(userClickedPattern.length===gamePattern.length){
     setTimeout(function(){
       nextSequence();
     },1000);

     }
   
  }else{
    
    
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    
    $("#level-title").text("Refresh To PLay again !");
    HTMLFormElement.reset();
    

}
}

