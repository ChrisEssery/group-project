import { Component, OnInit } from '@angular/core';
import io from "socket.io-client";

@Component({
  selector: 'app-connect-four',
  templateUrl: './connect-four.component.html',
  styleUrls: ['./connect-four.component.css']
})
export class ConnectFourComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    const infoDisplay = document.querySelector('#space');
    const connectToGameButton = document.querySelector('#connectButton');
    const readyForGameButton = document.querySelector('#readyButton')
    let currentPlayerType = "user";
    let playerNumber = 0;
    let ready = false;
    let opponentReady = false;
    let isGameOver = false;
    let slotTaken = -1;
    connectToGameButton.addEventListener('click', connectToGame);

    // Start game
    function connectToGame() {
      // Creates socket to use for the game

      const socket = io("http://localhost:3080");

      // Gets your player number
      socket.on('player-number', num => {
        if (num === -1) {
          infoDisplay.innerHTML = "Sorry, the server is full.";
        } else {
          playerNumber = parseInt(num);
          if (playerNumber === 1) {
            currentPlayerType = "enemy";
          }
          // Get other player status
          socket.emit('check-players');
        }
      })

      // Another player has connected or disconnected
      socket.on('player-connection', num => {
        console.log(`Player number ${num} has connected or disconnected`);
        playerConnectedOrDisconnected(num);
      })

      // On enemy ready
      socket.on('opponent-ready', num => {
        opponentReady = true;
        if (ready) {
          playGame(socket);
        }
      })

      // Check player status
      socket.on('check-players', players => {
        players.forEach((p, i) => {
          if (p.connected) {
            playerConnectedOrDisconnected(i);
          }
          if (p.ready) {
            if (i !== playerNumber) {
              opponentReady = true;
            }
          }
        })
      })

      // Ready button click
      readyForGameButton.addEventListener('click', () => {
        playGame(socket);
      })

      // On turn received
      socket.on('takeSlot', id => {
        opponentTurn(id);
        playGame(socket);
      })

      // Makes player name bold on connection
      function playerConnectedOrDisconnected(num) {
        let player = `.p${parseInt(num) + 1}`;
        if (parseInt(num) === playerNumber) {
          let myElement = <HTMLElement><any>document.querySelector(player);
          myElement.style.fontWeight = 'bold';
        }
      }

      // Emits ready signal and checks if game is over
      function playGame(socket) {
        socket.on('game-over', over => {
          isGameOver = over;
        })
        if (isGameOver) {
          return;
        }
        if (!ready) {
          socket.emit('player-ready');
          ready = true;
        }
        if (opponentReady) {
          if (currentPlayerType === 'user') {
            displayCurrentPlayer.innerHTML = 'Your turn!';
          }
          if (currentPlayerType === 'enemy') {
            displayCurrentPlayer.innerHTML = 'Opponent\'s turn';
          }
        }
      }

      // Checks if any of the winning combinations are on the board
      function checkBoard() {
        for (let y = 0; y < winningArrays.length; y++) {
          const square1 = squares[winningArrays[y][0]]
          const square2 = squares[winningArrays[y][1]]
          const square3 = squares[winningArrays[y][2]]
          const square4 = squares[winningArrays[y][3]]

          //check those squares to see if they all have the class of player-one
          if (
            square1.classList.contains('player-one') &&
            square2.classList.contains('player-one') &&
            square3.classList.contains('player-one') &&
            square4.classList.contains('player-one')
          ) {
            isGameOver = true;
            socket.emit('game-over');
            displayCurrentPlayer.innerHTML = '';
            result.innerHTML = 'Player One Wins!'
          }
          //check those squares to see if they all have the class of player-two
          if (
            square1.classList.contains('player-two') &&
            square2.classList.contains('player-two') &&
            square3.classList.contains('player-two') &&
            square4.classList.contains('player-two')
          ) {
            isGameOver = true;
            socket.emit('game-over');
            displayCurrentPlayer.innerHTML = '';
            result.innerHTML = 'Player Two Wins!';
          }
        }
      }

      // Adds game functionality to each slot on the board - emits to second player and swaps whose turn it is
      for (let i = 0; i < squares.length; i++) {
        (squares[i] as HTMLElement).dataset.id = String(i);
        squares[i].addEventListener("click", function () {
          //if the square below your current square is taken, you can go ontop of it
          if (currentPlayerType === 'user' && ready && opponentReady && !isGameOver) {
            if (squares[i + 7].classList.contains('taken') && !squares[i].classList.contains('taken') || squares[i + 7].classList.contains('bottom') && !squares[i].classList.contains('taken')) {
              if (playerNumber == 0) {
                squares[i].classList.add('taken')
                squares[i].classList.add('player-one')
                let sq = (squares[i] as HTMLElement).dataset.id;
                slotTaken = parseInt(sq)
                socket.emit('takeSlot', slotTaken);
                checkBoard()
                currentPlayerType = 'enemy'
                playGame(socket);
              } else if (playerNumber == 1) {
                squares[i].classList.add('taken')
                squares[i].classList.add('player-two')
                let sq = (squares[i] as HTMLElement).dataset.id;
                slotTaken = parseInt(sq)
                socket.emit('takeSlot', slotTaken);
                checkBoard()
                currentPlayerType = 'enemy'
                playGame(socket);

              }
            } else alert('You can\'t go here!')
          }
        })
      }

      // Takes the opponent's based on the slot received 
      function opponentTurn(id) {
        if (playerNumber == 0) {
          playerNumber = 1;
        }
        else {
          playerNumber = 0;
        }
        console.log("Taking a turn...");
        if (squares[id + 7].classList.contains('taken') && !squares[id].classList.contains('taken') || squares[id + 7].classList.contains('bottom') && !squares[id].classList.contains('taken')) {
          if (playerNumber == 0) {
            squares[id].classList.add('taken')
            squares[id].classList.add('player-one')
            playerNumber = 1;
          } else if (playerNumber == 1) {
            squares[id].classList.add('taken')
            squares[id].classList.add('player-two')
            playerNumber = 0;
          }
        } else alert('You can\'t go here!')
        currentPlayerType = 'user';
        checkBoard()
      }
    }

    // All possible winning combinations
    const winningArrays = [
      [0, 1, 2, 3],
      [41, 40, 39, 38],
      [7, 8, 9, 10],
      [34, 33, 32, 31],
      [14, 15, 16, 17],
      [27, 26, 25, 24],
      [21, 22, 23, 24],
      [20, 19, 18, 17],
      [28, 29, 30, 31],
      [13, 12, 11, 10],
      [35, 36, 37, 38],
      [6, 5, 4, 3],
      [0, 7, 14, 21],
      [41, 34, 27, 20],
      [1, 8, 15, 22],
      [40, 33, 26, 19],
      [2, 9, 16, 23],
      [39, 32, 25, 18],
      [3, 10, 17, 24],
      [38, 31, 24, 17],
      [4, 11, 18, 25],
      [37, 30, 23, 16],
      [5, 12, 19, 26],
      [36, 29, 22, 15],
      [6, 13, 20, 27],
      [35, 28, 21, 14],
      [0, 8, 16, 24],
      [41, 33, 25, 17],
      [7, 15, 23, 31],
      [34, 26, 18, 10],
      [14, 22, 30, 38],
      [27, 19, 11, 3],
      [35, 29, 23, 17],
      [6, 12, 18, 24],
      [28, 22, 16, 10],
      [13, 19, 25, 31],
      [21, 15, 9, 3],
      [20, 26, 32, 38],
      [36, 30, 24, 18],
      [5, 11, 17, 23],
      [37, 31, 25, 19],
      [4, 10, 16, 22],
      [2, 10, 18, 26],
      [39, 31, 23, 15],
      [1, 9, 17, 25],
      [40, 32, 24, 16],
      [9, 17, 25, 33],
      [8, 16, 24, 32],
      [11, 17, 23, 29],
      [12, 18, 24, 30],
      [1, 2, 3, 4],
      [5, 4, 3, 2],
      [8, 9, 10, 11],
      [12, 11, 10, 9],
      [15, 16, 17, 18],
      [19, 18, 17, 16],
      [22, 23, 24, 25],
      [26, 25, 24, 23],
      [29, 30, 31, 32],
      [33, 32, 31, 30],
      [36, 37, 38, 39],
      [40, 39, 38, 37],
      [7, 14, 21, 28],
      [8, 15, 22, 29],
      [9, 16, 23, 30],
      [10, 17, 24, 31],
      [11, 18, 25, 32],
      [12, 19, 26, 33],
      [13, 20, 27, 34],
    ]
  }
}