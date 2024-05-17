const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: "50541",
  });
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  conn.on("Connect", () => {
    console.log("Server says: Successfully connected to game server!", connect);
    const playerName = "Name: AMH";
    conn.write(playerName);
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;
