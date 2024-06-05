const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.json({message:"Router route activated!"});
});

router.get("/random", (request, response) => {
    response.json({message:"Random Route Routed!!"});
});

module.exports = router;