// Get dependencies
const db = require('./db')
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv/config');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Session setup
app.use(session({
  secret: 'secret',  
  resave: false,
  saveUninitialized: true,
  cookie: {
      maxAge: 10 * 1000  // valid period
  }
}));

// Point static path to dist (folder where build files are located)
app.use(express.static(path.join(__dirname, 'dist/group-project')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

// MULTIPLAYER FUNCTIONALITY
// Connect Four

const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require ("socket.io")(Http);

Http.listen(3080, () => {
    console.log("Listening at :3080...");
});

// Handle connection request
const connections = [null, null]

Socketio.on('connection', socket => {
    console.log('New connection');
    // Find available player numbers
    let playerIndex = -1;
    for(const i in connections) {
        if(connections[i] === null){
            playerIndex = i;
            break;
        }
    }

    socket.emit('player-number', playerIndex);
    console.log(`Player ${playerIndex} has connected`);
    if(playerIndex === -1){
        return;
    }

    connections[playerIndex] = false;

    // Tell everyone what player number just connected
    socket.broadcast.emit('player-connection', playerIndex);

    socket.on('disconnect', () => {
        console.log(`Player ${playerIndex} disconnected`);
        connections[playerIndex] = null;
        //Tell what player disconnected
        socket.broadcast.emit('player-connection', playerIndex);
    });

    // On ready
    socket.on('player-ready', () => {
        socket.broadcast.emit('opponent-ready', playerIndex);
        connections[playerIndex] = true;
    })

    // Check player connections
    socket.on('check-players', () => {
        const players = []
        for(const i in connections) {
            connections[i] === null ? players.push({connected: false, ready: false}) : 
            players.push({connected: true, ready: connections[i]});
            socket.emit('check-players', players);
        }
    })

    // On slot received
    socket.on('takeSlot', id => {
        console.log(`Turn taken by ${playerIndex}`, id);

        // Emit move to the other player
        socket.broadcast.emit('takeSlot', id);
    })

    // On slot reply
    socket.on('slot-reply', id => {
        console.log(id);

        // Forward to the other player
        socket.broadcast.emit('slot-reply', id);
    })

    socket.on('game-over', () => {
        socket.broadcast.emit('game-over', true);
    })
});

// MEMORY GAME 
const express_mg = require('express');
const http_mg = require('http');
const app_mg = express_mg();
const server_mg = http_mg.createServer(app_mg);
const port_mg = '3050';
const Socketio_mg = require ("socket.io")(http_mg);
server_mg.listen(port_mg, () => console.log("Listening at :3050..."));

// Handle connection request
const connections_mg = [null, null]
let cardDeck = [];

Socketio_mg.on('connection', socket => {
    console.log('New connection');
    // Find available player numbers
    let playerIndex_mg = -1;
    for(const i in connections_mg) {
        if(connections_mg[i] === null){
            playerIndex_mg = i;
            break;
        }
    }

    socket.emit('player-number', playerIndex);
    console.log(`Player ${playerIndex} has connected`);
    if(playerIndex === -1){
        return;
    }

    connections_mg[playerIndex] = false;

    // Tell everyone what player number just connected
    socket.broadcast.emit('player-connection', playerIndex);

    socket.on('disconnect', () => {
        console.log(`Player ${playerIndex} disconnected`);
        connections_mg[playerIndex] = null;
        //Tell what player disconnected
        socket.broadcast.emit('player-connection', playerIndex);
    });

    // On ready
    socket.on('player-ready', () => {
        socket.broadcast.emit('opponent-ready', playerIndex);
        connections_mg[playerIndex] = true;
    })

    // Check player connections
    socket.on('check-players', () => {
        const players = []
        for(const i in connections_mg) {
            connections_mg[i] === null ? players.push({connected: false, ready: false}) : 
            players.push({connected: true, ready: connections_mg[i]});
            socket.emit('check-players', players);
        }
    })

    // On slot received
    socket.on('card-flipped', card => {
        console.log(`Turn taken by ${playerIndex}`, card);

        // Emit move to the other player
        socket.broadcast.emit('card-flipped', card);
    })

    socket.on('send-card', card => {
        cardDeck.push(card);
    })

    socket.on('card-request', () => {
        console.log("Lengthyyyy: " + cardDeck.length);
        for(let i = 0; i < cardDeck.length; i++){
            console.log("Sending...")
        socket.emit('card-sent', cardDeck[i]);
        }
    })

    socket.on('card-request-again', () => {
        console.log(cardDeck.length);
        for(let i = 0; i < cardDeck.length; i++){
            console.log("Sending...")
        socket.emit('card-sent-again', cardDeck[i]);
        }
    })

    // Clears deck when starting another game
    socket.on('clear-deck', () => {
        cardDeck = [];
    })

    let playAgain = true;

    socket.on('play-again', () => {
        socket.broadcast.emit('play-again', playAgain);
    })

    // On slot reply
    socket.on('slot-reply', id => {
        console.log(id);

        // Forward to the other player
        socket.broadcast.emit('slot-reply', id);
    })

    socket.on('game-over', () => {
        socket.broadcast.emit('game-over', true);
    })

    // When game ready to start
    socket.on('game-start', () => {
        console.log("going");
        socket.emit('ready-to-go', true);
    })
});