import { ioSocket } from "./socketController.js";
import { healthValue, isEating, isSad } from "../riveController.js";

/* This file contains all the socket.io receivers.
 * That means everything the server emits to the client should be put in here. When the server emits (sends) a message
 * to the frontend such as "status" or "feed", the client responds with the code inside the socket.on block.
 */

// Updates rive values with received status updates from server
ioSocket.on("status", (data) => {
  // console.log("Health", healthValue);
  // console.log("Mood is sad", isSad);
  // console.log("incoming data", data);
  healthValue.value = data.hunger;
  isSad.value = data.isSad;
});

ioSocket.on("feeding", (data) => {
  isEating.fire();
  healthValue.value = data.hunger;
  isSad.value = data.isSad;
});
