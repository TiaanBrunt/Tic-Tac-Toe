const boardDiv = document.querySelector("#board");
const resetButton = document.querySelector("#reset");
const restartButton = document.querySelector("#restart");


const gameBoard = (() => {
    let playerOne = true;
    let playerOneScore = 0;
    let playerTwoScore = 0;
    let board = []; 
    let turnCount = 0;

    for(let i = 0; i < 9; i++){
        let boardCell = document.createElement("div");
        boardCell.classList.add("cell");
        boardCell.addEventListener('click', () => {
            turn(boardCell) }); 
        boardDiv.append(boardCell);
        board.push(boardCell);
    }



    const restartGame = () => {
        playerOneScore = 0;
        playerTwoScore = 0;
        updateScore();
        reset();
    }

    const updateScore = () => {
        document.getElementById("playerOneScore").innerHTML = "<strong>Player X Score:</strong> " + playerOneScore;
        document.getElementById("playerTwoScore").innerHTML = "<strong>Player O Score:</strong> " + playerTwoScore;
    }

    const reset = () => {
        board = [];
        turnCount = 0;
        playerOne = true;
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
                turnCount++;
                checkGame();
            }
        else{
            cell.innerHTML = "O";
            playerOne = true;
            turnCount++;
            checkGame();
        }    
    }
    //Checks win conditions
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
        else if(board[2].innerHTML == "X" && board[5].innerHTML == "X" && board[8].innerHTML == "X"){
            winner("p1");
        }
        else if(board[2].innerHTML == "O" && board[5].innerHTML == "O" && board[8].innerHTML == "O"){
            winner("p2");
        }
        else if(board[1].innerHTML == "X" && board[4].innerHTML == "X" && board[7].innerHTML == "X"){
            winner("p1");
        }
        else if(board[1].innerHTML == "O" && board[4].innerHTML == "O" && board[7].innerHTML == "O"){
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
            updateScore();
            reset();
        }
        else{
            alert("Player Two won!");
            playerTwoScore++;
            updateScore();
            reset();
        }
    }
    return {board, reset, winner, checkGame, turn, restartGame};
})();

resetButton.addEventListener('click', gameBoard.reset);
restartButton.addEventListener('click', gameBoard.restartGame);
