import { Server } from "socket.io";
const io = new Server({ /* options */ });

io.on("connection", (socket) => {
    console.log("User connected");
});

io.listen(3000);

let lastTime = Date.now();
let dt = 0;

setInterval(() => {
    dt = Date.now() - lastTime;
    Update(dt);
    lastTime = Date.now();
}, 50);

function Update(dt) {
    io.emit("update", dt);
}