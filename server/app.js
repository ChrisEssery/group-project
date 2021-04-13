const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require ("socket.io")(Http);

Http.listen(3000, () => {
    console.log("Listening at :3000...");
});

// Handle connection request
const connections = [null, null]

Socketio.on('connection', (socket) => {
    console.log('New connection');
    // Find available player numbers
    let playerIndex = -1;
    for(const i in connections) {
        if(connections[i] === null){
            console.log("New player");
            playerIndex = i;
            break;
        }
    }
    Socketio.emit('player-number', playerIndex);
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
    })
});

