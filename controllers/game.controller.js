const db = require("../models/index")
const Game = db.games;
const Op = db.Sequelize.Op;

// Create and Save a new game data
module.exports.createGame = (req, res) => {
    // validate request
    if (!req.body.game_name || !req.body.no_Of_Students ||
        !req.body.teacher_name || !req.body.game_environment || !req.body.game_category) {
        res.status(404).json({
            message: "Field must not be empty!"
        });
    };

    const courseData = {
        game_name: req.body.game_name,
        teacher_name: req.body.teacher_name,
        availability: req.body.availability,
        game_environment: req.body.game_environment,
        no_Of_Students: req.body.no_Of_Students,
        game_category: req.body.game_category,
    };

    Game.create(courseData)
        .then((data) => {
            res.status(201).json(data);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Occurring error while creating game data!"
            });
        });

};

// Retrieve all the data of games
module.exports.getAllGamesData = (req, res) => {
    const game_name = req.query.game_name;
    const condition = game_name ? { game_name: { [Op.iLike]: `%${game_name}%` } } : null;

    Game.findAll({
        where: condition
    })
        .then((data) => {
            res.status(201).json(data);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Occurring error while retrieving games data!"
            });
        });

};

// Retrieve a single game data
module.exports.getSingleGameData = (req, res) => {
    const id = req.query.id;

    Game.findByPk(id)
        .then((data) => {
            res.status(201).json(data);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Occurring error while retrieving game data!"
            });
        });

};

// Update a game data with id
module.exports.updateGameData = (req, res) => {
    const id = req.query.id;

    Game.update(req.body, {
        where: {
            id: id
        }
    }).then((num) => {
        if (num == 1) {
            res.status(201).json({
                message: `Game with this ${id} Updated successfully!`
            });
        } else {
            res.json(404).json({
                message: `Can't update game with this id: ${id}`
            });
        };
    }).catch(err => {
        res.status(500).json({
            message: err.message || `Occurring error while updating data of game`
        });
    })

};

// Delete a single data of the game
module.exports.deleteSingleGame = (req, res) => {
    const id = req.query.id;

    Game.destroy({
        where: {
            id: id
        }
    }).then((num) => {
        if (num == 1) {
            res.status(200).json({
                message: `Game with this id ${id} deleted successfully!`
            });
        } else {
            res.json(404).json({
                message: `Can't delete the game with this id: ${id}`
            });
        };
    }).catch(err => {
        res.status(500).json({
            message: err.message || `Occurring error while deleting data of game`
        });
    })

};

// Delete all the data of the game
module.exports.deleteAllGames = (req, res) => {
    Game.destroy({
        where: {}
    }).then(num => {
        res.status(200).json({
            message: `${num} Numbers of game data deleted successfully!`
        });
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Occurring error while deleting data of game!"
        })
    });

};

