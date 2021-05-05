const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require ("socket.io")(Http);

Http.listen(3050, () => {
    console.log("Listening at :3050...");
});

// Handle connection request
const connections = [null, null]
let cardDeck = [];

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