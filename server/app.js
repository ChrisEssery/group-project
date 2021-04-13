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
            console.log("New player");
            playerIndex = i;
            break;
        }
    }
    if(playerIndex === -1){
        return;
    }
    Socketio.emit('player-number', playerIndex);
    console.log(`Player ${playerIndex} has connected`);
})

