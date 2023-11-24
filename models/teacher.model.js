module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("Teacher", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        teacher_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        gender: {
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
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: { isEmail: true },
        },
        age: {
            type: Sequelize.INTEGER
        },
        experience: {
            type: Sequelize.INTEGER,
        },
        qualification: {
            type: Sequelize.STRING,
        },
        caste: {
            type: Sequelize.STRING,
        },
        address: {
            type: Sequelize.STRING,
        },
        course_name: {
            type: Sequelize.STRING,
        },
        contact_no: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
        // { timestamps: false }
    );

    return Teacher;
};

