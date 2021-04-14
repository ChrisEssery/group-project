
const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require ("socket.io")(Http);

Http.listen(3000, () => {
    console.log("Listening at :3000...");
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

