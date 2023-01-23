function getComputerChoice(){
    let choice = Math.floor((Math.random()*3)+1);
    let rockPapScis='';
    if(choice===1){
        rockPapScis='Rock';
    }
    else if (choice===2){
        rockPapScis='Paper';
    }else{
        rockPapScis='Scissors';
    }
    return rockPapScis;
}


function playRound(playerSelection,computerSelection){
    let player=playerSelection.toLowerCase();
    let comp=computerSelection.toLowerCase();
    console.log(player);
    console.log(comp);
    let result='';
    switch(player){
        case "scissors":
            if(comp==="rock"){
                result=`You Lose! ${comp} beats ${player}`;
            }else if(comp==="paper"){
                result=`You Win! ${player} beats ${comp}`;
            }
            else{
                result=`Tie!`;
            }
            break;
        case "paper":
            if(comp==="rock"){
                result=`You Win! ${player} beats ${comp}`;
            }else if(comp==="scissors"){
                result=`You Lose! ${comp} beats ${player}`;
            }
            else{
                result='Tie!';
            }
            break;
        case "rock":
            if(comp==="paper"){
                result=`You Lose! ${comp} beats ${player}`;
            }else if(comp==="scissors"){
                result=`You Win! ${player} beats ${comp}`;
            }
            else{
                result='Tie!';
            }
            break;
        default:
            console.log("woops something went wrong!");
    }
    return result;
}
// let playerSelection=;
// let computerSelection=;
//console.log(playRound(playerSelection,computerSelection));

function game(){
    let win=0;
    let lose=0;
    let tie=0;
    let result='';
    for (let i = 0; i < 5; i++) {
        result=playRound(prompt("Please enter Rock,Paper,or Scissors"),getComputerChoice());
        if(result.startsWith("You Win!")){
            win++;
        }else if(result.startsWith("You Lose!")){
            lose++;
        }else{tie++}
    }
    if(win>lose){
        console.log(`You won the match!\nScore: Player: ${win} Computer: ${lose} Tie: ${tie}`);
    }else if(win<lose){
        console.log(`You lost the match!\nScore: Player: ${win} Computer: ${lose} Tie: ${tie}`);
    }else{
        console.log(`It's a tie!\nScore: Player: ${win} Computer: ${lose} Tie: ${tie}`);
    }
}
game();