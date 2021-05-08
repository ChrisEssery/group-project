import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import io from "socket.io-client";
import { TokenStorageService } from 'src/app/_services/token-storage.service';
@Component({
  selector: 'app-connect-four',
  templateUrl: './connect-four.component.html',
  styleUrls: ['./connect-four.component.css']
})

@Injectable({
  providedIn: "root"
})
export class ConnectFourComponent implements OnInit {
  isFriend: boolean = false
  playerData: any;
  player = {username: "", result: ""};
  opponent = {username: "", result: ""};
  username: string;
  opponentName: string;
  result: string;

  isGameOver: boolean = false;
  playerName: string;
  socket: any;

  constructor(private router: Router, private tokenStorageService: TokenStorageService) {
    this.username = tokenStorageService.getUser();
    this.player.username = this.username;
  }

  ngOnInit(): void {
  }

  addFriend(e: { preventDefault: () => void; }) {
    e.preventDefault()
    this.isFriend = true;
    window.alert('Friend added')
  }

  ngAfterViewInit() {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    const infoDisplay = document.querySelector('#space');
    const connectToGameButton = document.querySelector('#connectButton');
    const readyForGameButton = document.querySelector('#readyButton')
    const playerName = document.querySelector('#test') as HTMLElement;
    const playAgainWindow = document.querySelector('#finish') as HTMLElement;
    let currentPlayerType = "user";
    let playerNumber = 0;
    let ready = false;
    let opponentReady = false;
    let slotTaken = -1;
    let connected = false;
    const username = this.username;
    let player = {username: "", result: ""};
    let opponent = {username: "", result: ""};
    const opponentName = this.opponentName;
    let playerData = [];

    connectToGameButton.addEventListener('click', connectToGame);

    // Start game
    function connectToGame(this: ConnectFourComponent) {
      // Creates socket to use for the game
      if (connected) return;
      this.socket = io("http://localhost:3080");
      // Emits user to other player
      this.socket.emit('player-name', username);
      connected = true;
      // Gets your player number
      this.socket.on('player-number', num => {
        if (num === -1) {
          infoDisplay.innerHTML = "Sorry, the server is full.";
        } else {
          playerNumber = parseInt(num);
          if (playerNumber === 1) {
            currentPlayerType = "enemy";
          }
          // Get other player status
          this.socket.emit('check-players');
        }
      })

      // Another player has connected or disconnected
      this.socket.on('player-connection', num => {
        console.log(`Player number ${num} has connected or disconnected`);
        playerConnectedOrDisconnected(num);
      })

      // On enemy ready
      this.socket.on('opponent-ready', num => {
        opponentReady = true;
        if (ready) {
          playGame(this.socket);
        }
      })

      // Check player status
      this.socket.on('check-players', players => {
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
        playGame(this.socket);
      })

      // On turn received
      this.socket.on('takeSlot', id => {
        opponentTurn(id);
        playGame(this.socket);
      })

      // Makes player name bold on connection
      function playerConnectedOrDisconnected(num) {
        let player = `.p${parseInt(num) + 1}`;
        if (parseInt(num) === playerNumber) {
          let myElement = <HTMLElement><any>document.querySelector(player);
          myElement.style.fontWeight = 'bold';
          var textToChange = myElement.childNodes[0];
          textToChange.nodeValue = playerName.innerText + "   ";
        }
        if (playerNumber === 0) {
          let p2 = <HTMLElement><any>document.querySelector(`.p2`);
          p2.style.display = 'none';
        }
        if (playerNumber === 1) {
          let p1 = <HTMLElement><any>document.querySelector(`.p1`);
          p1.style.display = 'none';
        }
      }

      // Emits ready signal and checks if game is over
      const playGame = (socket) => {
        socket.on('game-over', over => {
          this.isGameOver = over;
          if(currentPlayerType === 'user'){
            player.result = "LOSS";
            opponent.result = "WIN";
          }
          else{
            opponent.result = "LOSS";
            player.result = "WIN";
          }
          player.username = username; 
          playerData.push(player);
          playerData.push(opponent);
          console.log(playerData);
          this.playerData  = [];
          this.playerData[0] = playerData[0];
          this.playerData[1] = playerData[1];
          console.log(this.playerData);
          if(playerNumber === 0){
            this.gameResult;
          }
        })
        if (this.isGameOver) {
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

      // Gets opponent information
      this.socket.on('opponent-information', username => {
        opponent.username = username;
      })

      // Checks if any of the winning combinations are on the board
      const checkBoard = () => {
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
            this.isGameOver = true;
            this.socket.emit('game-over');
            displayCurrentPlayer.innerHTML = '';
            var text = playerName.innerHTML + ' Wins!';
            result.innerHTML = text;
            playAgainWindow.style.visibility = 'visible';
            playAgainWindow.style.opacity = '1';
            this.socket.close();
          }
          //check those squares to see if they all have the class of player-two
          if (
            square1.classList.contains('player-two') &&
            square2.classList.contains('player-two') &&
            square3.classList.contains('player-two') &&
            square4.classList.contains('player-two')
          ) {
            this.isGameOver = true;
            this.socket.emit('game-over');
            displayCurrentPlayer.innerHTML = '';
            var text = playerName.innerHTML + ' Wins!';
            result.innerHTML = text;
            playAgainWindow.style.visibility = 'visible';
            playAgainWindow.style.opacity = '1';
            this.socket.close();
          }
        }
      }

      // Adds game functionality to each slot on the board - emits to second player and swaps whose turn it is
      for (let i = 0; i < squares.length; i++) {
        (squares[i] as HTMLElement).dataset.id = String(i);
        squares[i].addEventListener("click", () => {
          //if the square below your current square is taken, you can go ontop of it
          if (currentPlayerType === 'user' && ready && opponentReady && !this.isGameOver) {
            if (squares[i + 7].classList.contains('taken') && !squares[i].classList.contains('taken') || squares[i + 7].classList.contains('bottom') && !squares[i].classList.contains('taken')) {
              if (playerNumber == 0) {
                squares[i].classList.add('taken')
                squares[i].classList.add('player-one')
                let sq = (squares[i] as HTMLElement).dataset.id;
                slotTaken = parseInt(sq)
                this.socket.emit('takeSlot', slotTaken);
                checkBoard()
                currentPlayerType = 'enemy'
                playGame(this.socket);
              } else if (playerNumber == 1) {
                squares[i].classList.add('taken')
                squares[i].classList.add('player-two')
                let sq = (squares[i] as HTMLElement).dataset.id;
                slotTaken = parseInt(sq)
                this.socket.emit('takeSlot', slotTaken);
                checkBoard()
                currentPlayerType = 'enemy'
                playGame(this.socket);
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

  playAgain() {
    this.router.navigate(["connect4start"]);
  }

  get gameResult(){
    return this.playerData;
  }
}