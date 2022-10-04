import Vector2 from "./types/Vector2.js";
import Transform from "./components/Transform.js";
import GameObject from "./GameObject.js";
import { Server } from "socket.io";
const io = new Server({ cors: { origin: "*" } });

io.listen(3000);

let lastTime = Date.now();
let dt = 0;
let data = {};
let gameObjects = {};

io.on("connection", (socket) => {
    console.log(socket.id);
    SetUp(socket.id);

    socket.on("moveShip", (data) => {
        data.forEach((element) => {
            if (element.id.includes(socket.id)) {
                gameObjects[element.id].transform.position = element.transform.position;
            } else {
                // Malformed request, either error or malicious intent
                socket.disconnect();
            }
        });
    });

    socket.on("disconnect", (reason) => {
        console.log(`reason: ${reason}`);
        Object.keys(gameObjects).forEach((key) => {
            console.log(key);
            console.log(socket.id);
            if (key.includes(socket.id)) {
                delete gameObjects[key];
            }
        });
    });
});

setInterval(() => {
    dt = Date.now() - lastTime;
    Update(dt);
    lastTime = Date.now();
}, 50);

function Update(dt) {
    Object.keys(gameObjects).forEach((key) => {
        let gameObject = gameObjects[key];
        // gameObject.transform.position.x += 1;
    });
    data = {
        dt: dt,
        gameObjects: gameObjects,
    };

    io.emit("update", data);
}

function SetUp(id) {
    let objID = `ss-${id}`;
    let startShip = new GameObject(objID, new Transform(), []);
    gameObjects[objID] = startShip;
}