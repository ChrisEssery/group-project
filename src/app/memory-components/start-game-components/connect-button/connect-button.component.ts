import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';

@Component({
  selector: 'app-connect-button',
  templateUrl: './connect-button.component.html',
  styleUrls: ['./connect-button.component.scss']
})
export class ConnectButtonComponent implements OnInit {
  connectToGameButton: any
  playerNumber = 0;
  currentPlayerType = "user";

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.connectToGameButton = document.querySelector('#connectButton');
    this.connectToGameButton.addEventListener('click', this.connectToGame)

  }

  // Start game
  connectToGame() {
    // Creates socket to use for the game

    const socket = io("http://localhost:3050");

    // Gets your player number
    socket.on('player-number', num => {
      if (num === -1) {
        //infoDisplay.innerHTML = "Sorry, the server is full.";
      } else {
        this.playerNumber = parseInt(num);
        if (this.playerNumber === 1) {
          this.currentPlayerType = "enemy";
          console.log(this.currentPlayerType);
        }
        // Get other player status
        socket.emit('check-players');
      }
    })

    // Another player has connected or disconnected
    socket.on('player-connection', num => {
      console.log(`Player number ${num} has connected or disconnected`);
      //playerConnectedOrDisconnected(num);
    })
  }
/** 
  playerConnectedOrDisconnected(num){
    let player = `.p${parseInt(num) + 1}`;
    const target = <HTMLElement><any>document.querySelector(`${player} .connected`);
    if(parseInt(num) === this.playerNumber){
      let myElement = <HTMLElement><any>document.querySelector(player);
      myElement.style.fontWeight = 'bold';
    }
  } */
}
