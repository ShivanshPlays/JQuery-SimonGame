var colors=["red","blue","green","yellow"];
var gamePattern=[];

var level=0;
var started=false;
var userPattern=[];

$(document).on("keypress",function()
{
    if(started===false){
        nextSequence();
        started=true;
        $("#level-title").text("Level "+level);
    }
    
   

})



function nextSequence()
{
    userPattern=[]
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor((Math.random()*4));
    

    randomChosenColor=colors[randomNumber];

    gamePattern.push(randomChosenColor);

    
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100) ;
   
    playSound(randomChosenColor);
 
}

$(".btn").on("click",function()
{
    userChosenColor=$(this).attr("id");
    userPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userPattern.length-1);
    
  
})


function playSound(name){
    var aud=new Audio("./sounds/"+name+".mp3");
    aud.play();

}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);

}

function checkAnswer(currentlevel){
    
    
        if(gamePattern[currentlevel]===userPattern[currentlevel])
        {
            if(gamePattern[gamePattern.length]===gamePattern[userPattern.length])
            {
             setTimeout(function(){
             nextSequence();
             },1000);
            }
            
        }
    else{
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over")
            },200);
            $("h1").text("Game Over, Press Any Key to Restart");
        
            startOver();
        }
    }

function startOver (){
    level=0;
    started=false;
    gamePattern=[];


}
    
    


  




