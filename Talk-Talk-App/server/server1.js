const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const dotenv = require('dotenv');
const {getAllUsers} = require('./config/Database.js');
const path = require('path');


app.use(cors());
dotenv.config();


getAllUsers()
.then (data=>{
  console.log(data);
})
.catch(err =>{
  console.log(err);
})



const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://simple-chat-app-atef.herokuapp.com",
    methods: ["GET", "POST"],
  },
});


io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
    
  });

  socket.on("send_message", (data) => {
    try {
      io.to(data.room).emit("receive_message", data);
      console.log(data);
    } catch (e) {
      console.log(e);
      
    };
    
    
  });


  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(process.env.PORT);




app.use('/',express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


