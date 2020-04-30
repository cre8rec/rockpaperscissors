var game, rounds, playerMove, sum, gamePlaying, finalResult;

//

var playerScore = 0 
var compScore = 0 

sum = 0;

var game = 0

document.querySelector('.roundWinner').textContent = 'best to 5'

var newGameButton = document.querySelector('.newGame');




//computer random choice
function compMove(){
    return computerSelection = Math.floor(Math.random() * 3);
};


//chooses winner 
function winner() { 
    let message = '';
    if (sum == 3){message += 'you win with rock'}
    else if (sum == 4){message +=  'you win with paper'}
        else if (sum == 9){message += 'you win with scissors'}
           else if (sum == 2){message +=  'computer wins with paper'}
               else if (sum == 6){message +=  'computer wins with scissors'}
                   else if (sum == 8){message +=  'computer wins with rock'}
    else if (sum !== 3, 4, 9, 2, 6, 8) {message += 'its a draw'};
    return message   
}

//add player move to comp move 
function result(playerMove){
    sum = compMove() + playerMove;
   // return winner()
    return winner() + ' ' 
};

//update score 
function updatePlayerScore(answer){
    if (answer.includes('you')){playerScore++}
    return playerScore
}
function updateCompScore(answer){
    if (answer.includes('computer')){compScore++}
    return compScore
}
    

var finalResult = document.querySelector('.gameWinner');

//game results 
function checkResult(playerScore, compScore) {
    if(playerScore > compScore){
        finalResult.textContent = "You Won!";
        newGame()
    } else if(playerScore < compScore) {
        finalResult.textContent = "You Lost";
        newGame()
    }  
}

//new game button appears
function newGame(){
        console.log('new game?');
        newGameButton.style.display = 'flex'
       }



//button choices and outcomes - could be condensed 
const rock = document.querySelector('.rock');
rock.onclick = () => {

    roundWinner = document.querySelector('.roundWinner').textContent = result(1);
    
    let playerScore = document.querySelector('.my-score').textContent = updatePlayerScore(roundWinner);
    let compScore = document.querySelector('.comp-score').textContent = updateCompScore(roundWinner);
    

    if (playerScore === 5 || compScore === 5){checkResult(playerScore, compScore)}

    newGameButton.onclick = () => {console.log('hello')
                              init();}
  
                     }

const paper = document.querySelector('.paper');
paper.onclick = () => {
    
    roundWinner = document.querySelector('.roundWinner').textContent = result(4);
    
    playerScore = document.querySelector('.my-score').textContent = updatePlayerScore(roundWinner);
    compScore = document.querySelector('.comp-score').textContent = updateCompScore(roundWinner);
    
    
    if (playerScore === 5 || compScore === 5){checkResult(playerScore, compScore)}
    
    newGameButton.onclick = () => {console.log('hello')
                              init();}
                      }

const scissors = document.querySelector('.scissors');
scissors.onclick = () => {
    roundWinner = document.querySelector('.roundWinner').textContent = result(8);
    
    playerScore = document.querySelector('.my-score').textContent = updatePlayerScore(roundWinner);
    compScore = document.querySelector('.comp-score').textContent = updateCompScore(roundWinner);
     
    
    if (playerScore === 5 || compScore === 5){checkResult(playerScore, compScore)}

    
    newGameButton.onclick = () => {console.log('hello')
                              init();}
                         
                         }


//initialize 
function init(){
    playerScore = 0
    compScore = 0
    document.querySelector('.my-score').textContent = 0
    document.querySelector('.comp-score').textContent = 0

    this.finalResult.textContent = ' '
    document.querySelector('.roundWinner').textContent = 'best to 5'
    newGameButton.style.display = 'none'
    
}




//original code

/*function playRound(playerSelection) {
    let game = 0
    let computerSelection = Math.floor(Math.random() * 3);
   
    let playerMove = playerSelection.toLocaleLowerCase();
        if (playerMove == 'rock'){game += 1}
            else if (playerMove == 'paper'){game += 4}
                else {game += 8};
    


    
    let sum = computerSelection + game;
    var message = '' 
        
    let computerDisplay = ''
   
           if (computerSelection == 0){computerDisplay += 'computer chooses rock, '}
                else if (computerSelection == 1){computerDisplay += 'computer chooses paper, '}
                    else {computerDisplay += 'computer chooses scissors, '};
            
    
    
if (sum == 3){message += 'you win with rock'}
    else if (sum == 4){message +=  'you win with paper'}
        else if (sum == 9){message += 'you win with scissors'}
           else if (sum == 2){message +=  'computer wins with paper'}
               else if (sum == 6){message +=  'computer wins with scissors'}
                   else if (sum == 8){message +=  'computer wins with rock'}
    else if (sum !== 3, 4, 9, 2, 6, 8) { message += 'its a draw'};
                        
var winner = document.write(computerDisplay,message); 
return winner;*/







