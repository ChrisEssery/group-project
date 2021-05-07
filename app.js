// MULTIPLAYER FUNCTIONALITY
// Connect Four

const { consoleTestResultHandler } = require("tslint/lib/test");

const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);

Http.listen(3080, () => {
    console.log("Listening at :3080...");
});

// Handle connection request
const connections = [null, null]

Socketio.on('connection', socket => {
    console.log('New connection');
    // Find available player numbers
    let playerIndex = -1;
    for (const i in connections) {
        if (connections[i] === null) {
            playerIndex = i;
            break;
        }
    }

    socket.emit('player-number', playerIndex);
    console.log(`Player ${playerIndex} has connected`);
    if (playerIndex === -1) {
        return;
    }

    connections[playerIndex] = false;

    // Tell everyone which player number just connected
    socket.broadcast.emit('player-connection', playerIndex);

    socket.on('disconnect', () => {
        console.log(`Player ${playerIndex} disconnected`);
        connections[playerIndex] = null;
        //Tell which player disconnected
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
        for (const i in connections) {
            connections[i] === null ? players.push({ connected: false, ready: false }) :
                players.push({ connected: true, ready: connections[i] });
            socket.emit('check-players', players);
        }
    })

    // On slot received
    socket.on('takeSlot', id => {
        console.log(`Turn taken by ${playerIndex}`, id);

        // Emit move to the other player
        socket.broadcast.emit('takeSlot', id);
    })

    let playAgain = true;

    // Lets opponent know you want to play again
    socket.on('play-again', () => {
        socket.broadcast.emit('play-again', playAgain);
    })

    socket.on('game-over', () => {
        socket.broadcast.emit('game-over', true);
    })
});

// MEMORY GAME 
const Express_mg = require("express")();
const Http_mg = require("http").Server(Express_mg);
const Socketio_mg = require("socket.io")(Http_mg);

Http_mg.listen(3050, () => {
    console.log("Listening at :3050...");
});

// Handle connection request
const connections_mg = [null, null]
let cardDeck = [];

Socketio_mg.on('connection', socket => {
    console.log('New connection');
    // Find available player numbers
    let playerIndex_mg = -1;
    for (const i in connections_mg) {
        if (connections_mg[i] === null) {
            playerIndex_mg = i;
            break;
        }
    }

    socket.emit('player-number', playerIndex_mg);
    console.log(`Player ${playerIndex_mg} has connected`);
    if (playerIndex_mg === -1) {
        return;
    }

    connections_mg[playerIndex_mg] = false;

    // Tell everyone which player number just connected
    socket.broadcast.emit('player-connection', playerIndex_mg);

    socket.on('disconnect', () => {
        console.log(`Player ${playerIndex_mg} disconnected`);
        connections_mg[playerIndex_mg] = null;
        //Tell which player disconnected
        socket.broadcast.emit('player-connection', playerIndex_mg);
        
        // Clears the card deck if both players leave
        for (const i in connections_mg) {
            if (connections_mg[i] !== null) {
                return;
            }
        }
        cardDeck = [];
    });

    // On ready
    socket.on('player-ready', () => {
        socket.broadcast.emit('opponent-ready', playerIndex_mg);
        connections_mg[playerIndex_mg] = true;
    })

    // Check player connections
    socket.on('check-players', () => {
        const players = []
        for (const i in connections_mg) {
            connections_mg[i] === null ? players.push({ connected: false, ready: false }) :
                players.push({ connected: true, ready: connections_mg[i] });
            socket.emit('check-players', players);
        }
    })

    // On turn received
    socket.on('card-flipped', card => {
        console.log(`Turn taken by ${playerIndex_mg}`, card);

        // Emit card to the other player
        socket.broadcast.emit('card-flipped', card);
    })

    // When a card is received from the client, push it to card array
    socket.on('send-card', card => {
        cardDeck.push(card);
    })

    // When the deck is requested, send all cards back to the client
    socket.on('card-request', () => {
        for (let i = 0; i < cardDeck.length; i++) {
            socket.emit('card-sent', cardDeck[i]);
        }
    })

    // When the deck is requested for a rematch, send all cards back to the client
    socket.on('card-request-again', () => {
        for (let i = 0; i < cardDeck.length; i++) {
            socket.emit('card-sent-again', cardDeck[i]);
        }
    })

    // Clears deck when starting another game
    socket.on('clear-deck', () => {
        cardDeck = [];
    })

    let playAgain = true;

    // Lets opponent know you want to play again
    socket.on('play-again', () => {
        socket.broadcast.emit('play-again', playAgain);
    })

    // Lets opponent know if you've won/finished the game
    socket.on('game-over', () => {
        socket.broadcast.emit('game-over', true);
    })

    // When game ready to start
    socket.on('game-start', () => {
        socket.emit('ready-to-go', true);
    })
});