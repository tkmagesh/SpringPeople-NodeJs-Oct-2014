var nodejsWebSocket = require("nodejs-websocket");

var socketServer = nodejsWebSocket.createServer(function(con){
    console.log("A new connection is established..");
    con.on("text",function(msg){
        socketServer.connections.forEach(function(conn){
            conn.sendText(msg);
        });
    });
});
socketServer.listen("9090");
console.log("Chat server running on port 9090!");
