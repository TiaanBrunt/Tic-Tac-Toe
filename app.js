const boardDiv = document.querySelector("#board");
const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', reset);
let playerOne = true;
let playerTwo = false; 
let playerOneScore = 0;
let playerTwoScore = 0;
let board = []; 
let turnCount = 0;

const gameBoard = (() => {
    for(let i = 0; i < 9; i++){
        let boardCell = document.createElement("div");
        boardCell.classList.add("cell");
        boardCell.addEventListener('click', () => {
            turn(boardCell) }); //need to call function here
        boardDiv.append(boardCell);
        board.push(boardCell);
    }

    const reset = () => {
        board = [];
        turnCount = 0;
        let boardCells = document.getElementsByClassName('cell');
        for(let i = 0; i < boardCells.length; i++){
            boardCells[i].innerHTML = "";
            board.push(boardCells[i]);
        }
    }

    const turn = (cell) => {
        if(cell.innerHTML != ""){
            turn(cell);
        }
        else if(playerOne){
                cell.innerHTML = "X";
                playerOne = false;
                playerTwo = true;
                turnCount++;
                checkGame();
            }
    
        else{
            cell.innerHTML = "O";
            playerTwo = false;
            playerOne = true;
            turnCount++;
            checkGame();
        }    
    }

    const checkGame = () => {
        if(turnCount < 3){
            return;
        }
        else if(board[0].innerHTML == "X" && board[1].innerHTML == "X" && board[2].innerHTML == "X"){
            winner("p1");
        }
        else if(board[0].innerHTML == "O" && board[1].innerHTML == "O" && board[2].innerHTML == "O"){
            winner("p2");
        }
        else if(board[3].innerHTML == "X" && board[4].innerHTML == "X" && board[5].innerHTML == "X"){
            winner("p1");
        }
        else if(board[3].innerHTML == "O" && board[4].innerHTML == "O" && board[5].innerHTML == "O"){
            winner("p2");
        }
        else if(board[6].innerHTML == "X" && board[7].innerHTML == "X" && board[8].innerHTML == "X"){
            winner("p1");
        }
        else if(board[6].innerHTML == "O" && board[7].innerHTML == "O" && board[8].innerHTML == "O"){
            winner("p2");
        }
        else if(board[0].innerHTML == "X" && board[3].innerHTML == "X" && board[6].innerHTML == "X"){
            winner("p1");
        }
        else if(board[0].innerHTML == "O" && board[3].innerHTML == "O" && board[6].innerHTML == "O"){
            winner("p2");
        }
        else if(board[0].innerHTML == "X" && board[4].innerHTML == "X" && board[8].innerHTML == "X"){
            winner("p1");
        }
        else if(board[0].innerHTML == "O" && board[4].innerHTML == "O" && board[8].innerHTML == "O"){
            winner("p2");
        }

        else if(board[2].innerHTML == "X" && board[4].innerHTML == "X" && board[6].innerHTML == "X"){
            winner("p1");
        }
        else if(board[2].innerHTML == "O" && board[4].innerHTML == "O" && board[6].innerHTML == "O"){
            winner("p2");
        }
        
        else if(turnCount == 9){
            alert("Draw, time to reset");
            reset();
        }    
    }

    const winner = (player) => {
        if(player == "p1"){
            alert("Player One won!");
            playerOneScore++;
            document.getElementById("playerOneScore").innerHTML = "Player One Score" + playerOneScore;
            reset();
        }
        else{
            alert("Player Two won!");
            playerTwoScore++;
            document.getElementById("playerTwoScore").innerHTML = "Player Two Score" + playerOneScore;
            reset();
        }
    }

    
    return {board, reset, winner, checkGame, turn};
})();



