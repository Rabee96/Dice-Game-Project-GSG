let isPlayerOneTurn = true;
let playerOneScore = 0;
let playerTwoScore = 0;
let isGameFinished = false
let randomFace = 1;

function rollTheDice(){
    if(!isGameFinished){
        randomFace = Math.floor(Math.random() * 6) + 1; 
        changeDiceFace(randomFace);
        addScore(randomFace);
    }else{
        return 0;
    }
}

function addScore(result){
    if (result === 1 ) {
        randomFace = 0;
        toogleTurns();
        }else{
            if(isPlayerOneTurn){
                playerOneScore = playerOneScore + result;
                document.getElementById("player1Score").innerHTML=String(playerOneScore);
                checkWhoWins(playerOneScore)
            }else{
                playerTwoScore = playerTwoScore + result;
                document.getElementById("player2Score").innerHTML=String(playerTwoScore);
                checkWhoWins(playerTwoScore)
            }
    }
}

function checkWhoWins(score){
    if (score >= 30){
        isGameFinished = true;
        if(playerOneScore > playerTwoScore){
            document.getElementById("winner").innerHTML="Winner Winner Chicken dinner!!!";
        }else{
            document.getElementById("winner").innerHTML="Winner Winner Chicken dinner!!!";
        }
    }else{
        isGameFinished = false;
    }
}

function toogleTurns(){
    if(isPlayerOneTurn){
        isPlayerOneTurn = false;
        document.getElementById("player2").style.backgroundColor ="#85c8ff";
        document.getElementById("player1").style.backgroundColor ="transparent";
    }else{
        isPlayerOneTurn = true;
        document.getElementById("player1").style.backgroundColor ="#85c8ff";
        document.getElementById("player2").style.backgroundColor ="transparent";
    }
}

function changeDiceFace(dieFace){
    document.getElementById("diceImg").src="./dice"+String(dieFace)+".png";
}

function resetGame(){
    isPlayerOneTurn = true;
    playerOneScore = 0;
    playerTwoScore = 0;
    isGameFinished = false;
    randomFace = 1;
    document.getElementById("player1Score").innerHTML="0";
    document.getElementById("player2Score").innerHTML="0";
    document.getElementById("diceImg").src="./dice1.png";
    document.getElementById("winner").innerHTML="";
}
