module.exports = (sequelize, Sequelize) => {
    const Class = sequelize.define("Class", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Class: {
            type: Sequelize.STRING,
            allowNull: false
        },
        streams: {
            type: Sequelize.STRING,
        },
        monitor_name: {
            type: Sequelize.STRING,
        },
        class_teacher: {
            type: Sequelize.STRING,
        },
        subjects: {
            type: Sequelize.STRING,
        },
        fees: {
            type: Sequelize.INTEGER
        },
        section: {
            type: Sequelize.STRING,
            allowNull: false
        },
        no_Of_Male_students: {
            type: Sequelize.INTEGER
        },
        no_Of_Female_students: {
            type: Sequelize.INTEGER
        },
        no_Of_Students: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return Class;
};

