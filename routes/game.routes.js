module.exports = app => {
    const router = require("express").Router();

    const {
        createGame,
        getAllGamesData,
        getSingleGameData,
        updateGameData,
        deleteSingleGame,
        deleteAllGames,
    } = require("../controllers/game.controller");


    // create and save a game data
    router.post("/create-game", createGame)
    // retrieve all data of the games
    router.get("/get-AllGame-Data", getAllGamesData)
    //get single game data
    router.get('/get-singleGame-Data', getSingleGameData);
    // update a game data  
    router.put('/update-game-data', updateGameData);
    // Delete a single game data
    router.delete('/delete-single-game', deleteSingleGame);
    // Delete all game data
    router.delete('/delete-allGame', deleteAllGames);

    // 
    app.use("/api/games", router)

};