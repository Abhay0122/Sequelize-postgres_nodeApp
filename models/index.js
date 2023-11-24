const DB = require("../config/db");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(DB.DB, DB.USER, DB.PASSWORD, {
    host: DB.HOST,
    dialect: DB.dialect,
    operatorsAliases: false,

    pool: DB.pool
});

sequelize.authenticate().then(() => {
    console.log("Connection has been establised successfully!");
}).catch(err => {
    console.log(`unable to connect: ${err.message}`)
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// models
db.students = require("./student.model")(sequelize, Sequelize);
db.teachers = require("./teacher.model")(sequelize, Sequelize);
db.classes = require("./class.model")(sequelize, Sequelize);
db.Subjects = require("./subject.model")(sequelize, Sequelize);
db.courses = require("./course.model")(sequelize, Sequelize);
db.games = require("./game.model")(sequelize, Sequelize);

module.exports = db;