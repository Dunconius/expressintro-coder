const express = require("express");
const router = express.Router();

const {readAuthData, verifyAuthData, exampleAsyncMiddleware} = require("../middleware/authentication.js");

router.use(readAuthData);
// router.use(verifyAuthData);


router.get("/", (request, response) => {
    response.json({message:"Router route activated!"});
});

router.get("/getbyid/:pokemonNumber", exampleAsyncMiddleware, verifyAuthData, (request, response) => {
    
    let retrievedNumberFromUrl = request.params.pokemonNumber;
    
    response.json({
        number: retrievedNumberFromUrl
    })
});

router.get("/random", (request, response) => {
    let queryParams = request.query;
    response.json({
        message:"Random Route Routed!!",
    queryParams: queryParams
    });
});

router.post("/random", (request, response) => {
    response.json({message:"Random Route Routed!!"});
});

module.exports = router;