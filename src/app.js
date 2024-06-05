// declare and configure server

const express = require("express");
const serverInstance = express();
const PokemonRouter = require("./routers/pokemonRoutes.js");

// raw json in body allowed
serverInstance.use(express.json());
// form data in body allowed
serverInstance.use(express.urlencoded({extended: true}));

// every route that begins with /pokemon gets passed to PokemonRouter
serverInstance.use("/pokemon", PokemonRouter);



serverInstance.get("/", (request, response) => {
    console.log("hi from the server homepage updated!");

    response.json({
        message: "hello world"
    });
});

serverInstance.post("/", (request, response) => {
    
    console.log(request.body);

    response.json({
        message:"Received data:",
        requestData: request.body
    })
})


module.exports = serverInstance