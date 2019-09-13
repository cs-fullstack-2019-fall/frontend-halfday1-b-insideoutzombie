let player1score = 1;
let player2score = 1;
let winnerNum = 15;
let player1 = document.getElementById("p1_score");
let player2 = document.getElementById("p2_score");
let win_display = document.getElementById("dis_msg");

// function call for player 1 score
function playerOne() {
  player1.innerText = player1score++;
  // if player 1 is greater than player 2 update call Player2
  if (player1score > player2score ) {
    win_display.innerText = "Player 1";
    // if player 1 is greater than Winnernum update call with winner P1, calls reset function
  } else if (player1score === winnerNum) {
    win_display.innerText = "Winner P1";
    resetGame();
    // if player1 is the same as player2 then update call tied, calls reset function
  } else if (player1score === player2score) {
    win_display.innerText = "Tied";
    resetGame();
  }
}

// function call for player 2 score
function playerTwo() {
  player2.innerText = player2score++;
  // if player 2 is greater than player 1 update call with Player 2
  if (player2score > player1score) {
    win_display.innerText = "Player 2";
    // if player 2 is greater than Winnernum update call with winner P2, calls reset function
  } else if (player2score === winnerNum) {
    win_display.innerText = "Winner P2";
    resetGame();
    // if player2 is the same as player1 then update call tied, calls reset function
  } else if (player2score === player1score) {
    win_display.innerText = "Tied";
    resetGame();
  }
}

// function call to reset players score and force page reload
function resetGame() {
  player1score = 0;
  player2score = 0;
  location.reload();
}

// button calls for changing background colors
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let mainElement = document.getElementsByTagName("body");

button1.addEventListener('click', function() {
  console.log("Wokrs1");
  mainElement.style.backgroundColor = "red";
});

button2.addEventListener('click', function() {
  mainElement.style.backgroundColor = "blue";
});

button3.addEventListener('click', function() {
  mainElement.style.backgroundColor = "yellow";
});
