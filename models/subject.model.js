module.exports = (sequelize, Sequelize) => {
    const Subject = sequelize.define("Subject", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        teacher_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        subject: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        Class: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        course_name: {
            type: Sequelize.STRING,
        },
        no_Of_Students: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        streams: {
            type: Sequelize.STRING
        }
    },
        // { timestamps: false }
    );

    return Subject;
};

