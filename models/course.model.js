module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("Course", {
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
        course_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        no_Of_Students: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        streams: {
            type: Sequelize.STRING
        },
        fees: {
            type: Sequelize.INTEGER
        }
    },
        // { timestamps: false }
    );

    return Course;
};

