module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("Game", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        game_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        teacher_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        availability: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        no_Of_Students: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        game_environment: {
            type: Sequelize.STRING,
            allowNull: false
        },
        game_category: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
        // { timestamps: false }
    );

    return Game;
};

