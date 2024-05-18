const connect = require("./client.js");
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
};
const movement = function(key) {
  if (key === "w") {
    console.log("Move: up");
  }
  if (key === "a") {
    console.log("Move: left");
  }
  if (key === "s") {
    console.log("Move: down");
  }
  if (key === "d") {
    console.log("Move: right");
  }
};

connect();
setupInput();
module.exports = setupInput;