// run the server

const serverInstance = require("./app");

serverInstance.listen( 3000,() => {
    console.log("server is running");
});