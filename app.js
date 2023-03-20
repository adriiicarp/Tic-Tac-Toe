const x = "✖";
const o = "〇";
let gameState = "Player 1";
const modal = document.querySelector("dialog");
const textModal = modal.querySelector("h2");

const squares = Array.from(document.querySelectorAll(".square"));

squares.forEach((square, i) => {
    square.addEventListener("click", ()=>{
        if(gameState === "PAUSE") return;
        if(square.textContent !== "") return;
        square.innerText= gameState === "Player 1" ? x : o;
        const winningPosition = checkIfThereIsAWinner();
        if(typeof winningPosition === "object"){
            win(winningPosition);
            return
        }
        if(winningPosition === "tie"){
            showModal("Tie")
        }
        gameState = gameState === "Player 1" ? "Player 2" : "Player 1";
    })
}   )

function checkIfThereIsAWinner() {
    const board = squares.map(square => square.textContent)
    


//Check Horizontal

for (let i = 0; i <= 9; i +=3) {
    if( board[i] &&
        board[i] === board[i+1] && 
        board[i] === board[i+2] ){
            return [i,i+1,i+2];
        }
}


//Check Vertical

for (let i = 0; i <= 3; i ++) {
    if( board[i] &&
        board[i] === board[i+3] && 
        board[i] === board[i+6] ){
            return [i,i+3,i+6];
        }
}

//Check Oblique

    if( board[0] &&
        board[0] === board[4] && 
        board[0] === board[8] ){
            return win([0,4,8]);
    }
    if( board[2] &&
        board[2] === board[4] && 
        board[2] === board[6] ){
            return win[2,4,6];
        }
    
    if(board.includes("")) return false;
    return "tie";

}

function win(winningPosition){
    winningPosition.forEach(position => {
        squares[position].classList.toggle("winner",true);
    })
    showModal("Winner: "+gameState)
    gameState = "PAUSE";
}

function showModal(text){
    textModal.innerText = text;
    modal.showModal();
}

modal.querySelector("button").addEventListener("click", () =>{
    squares.forEach(square => {
        square.textContent = "";
        square.classList.toggle("winner",false);
        modal.close();
        gameState = "Player 1"
    });
})