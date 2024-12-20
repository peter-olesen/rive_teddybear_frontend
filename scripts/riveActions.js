import { isEating, overFeed, isAnnoyed } from "./riveController.js";
import { ioSocket } from "./socket/socketController.js";

const feedBtn = document.getElementById("feedBtn");
const overfeedBtn = document.getElementById("overfeedBtn");
const annoyedBtn = document.getElementById("annoyedBtn");

// Function to feed (emits a feed event to server which updates health status and plays animation)
export const feed = () => {
  isEating.fire();
  isSad = false;
  // console.log("isEating", isEating);
  ioSocket.emit("feed");
};

export const overFeeding = () => {
  overFeed.fire();
  // console.log("I'm stuffed!");
  ioSocket.emit("overFeed");
};

export const annoyed = () => {
  isAnnoyed.fire();
  // console.log("Feed me or something!");
  ioSocket.emit("isAnnoyed");
};

// Bind input to button in HTML
feedBtn.onclick = () => feed();
overfeedBtn.onclick = () => overFeeding();
annoyedBtn.onclick = () => annoyed();
