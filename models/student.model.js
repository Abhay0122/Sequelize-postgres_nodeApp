module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("Student", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        student_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        age: {
            type: Sequelize.INTEGER
        },
        Class: {
            type: Sequelize.STRING,
            allowNull: false
        },
        roll_No: {
            type: Sequelize.STRING,
            allowNull: false
        },
        father_name: {
            type: Sequelize.STRING,
        },
        mother_name: {
            type: Sequelize.STRING,
        },
        caste: {
            type: Sequelize.STRING,
        },
        address: {
            type: Sequelize.STRING,
        },
        contact_no: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return Student;
};

