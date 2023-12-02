var playerScore =0;
var aiScore=0;
$("img.rock").click("mouseclick", function(event){
    $("img.rock").slideUp().slideDown();
    var computerChoice =["rock", "paper", "scissors"];
    var number = Math.floor(Math.random()*3);
    var computerValue= computerChoice[number];
     if (computerValue === "rock"){
        $("h2").text("IT'S A DRAW!");
    }
    else if(computerValue === "paper"){
        $("h2").text("AI Wins!!");
        aiScore++;
        $("h3").text("Your Score - " + playerScore + " AI Score - " + aiScore);

    }
    else{
        $("h2").text("You Win!!");
        playerScore++;
        $("h3").text("Your Score - " + playerScore + " AI Score - " + aiScore);
    }
});
$("img.paper").click("mouseclick", function(event){
    $("img.paper").slideUp().slideDown();
    
    var computerChoice =["rock", "paper", "scissors"];
    var number = Math.floor(Math.random()*3);
    var computerValue= computerChoice[number];
    if (computerValue === "rock"){
        $("h2").text("You Win!!");
        playerScore++;
        $("h3").text("Your Score - " + playerScore + " AI Score - " + aiScore);
    }
    else if(computerValue === "paper"){
        $("h2").text("IT'S A DRAW");
    }
    else{
        $("h2").text("AI WINS!!");
        aiScore++;
        $("h3").text("Your Score -" + playerScore + " AI Score - " + aiScore);
    }

});

$("img.scissors").click("mouseclick", function(event){
    $("img.scissors").slideUp().slideDown();
    var computerChoice =["rock", "paper", "scissors"];
    var number = Math.floor(Math.random()*3);
    var computerValue= computerChoice[number];
    if (computerValue === "rock"){
        $("h2").text("AI Wins!!");
        aiScore++;
        $("h3").text("Your Score -" + playerScore + " AI Score - " + aiScore);
    }
    else if(computerValue === "paper"){
        $("h2").text("You Win!!");
        playerScore++;
        $("h3").text("Your Score -" + playerScore + " AI Score - " + aiScore);
    }
    else{
        $("h2").text("IT'S A DRAW");
    }
});