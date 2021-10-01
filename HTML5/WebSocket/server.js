//import http module
//http module is the predefined module
//http module used to create the http server
const http = require("http");


//import websocket module
//websocket module used to create the chat server
const server = require("websocket").server;


//assign the custom port number to chat server
let socket = new server({
    httpServer : http.createServer().listen(8080,()=>{
        console.log("server listening the port number 8080");
    })
});



//connection request
//read the msgs
//send the msgs
socket.on("request",function(request){
    let connection = request.accept(null,request.origin);
    connection.on("message",function(message){
        connection.send(message.utf8Data);
        connection.send("Hello_1");
        connection.send("Hello_2");
        // setTimeout(()=>{
        //     connection.send("Hello_3");
        // },10000);
        setInterval(()=>{
            connection.send(new Date().toLocaleTimeString());
        },1000);
    });
    connection.on("close",function(connection){
        console.log("connection closed");
    })
});








