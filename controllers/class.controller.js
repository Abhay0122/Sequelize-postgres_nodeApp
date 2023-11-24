const db = require("../models/index")
const Class = db.classes;
const Op = db.Sequelize.Op;

// Create and Save a new class data
module.exports.createClass = (req, res) => {
    // validate request
    if (!req.body.Class || !req.body.no_Of_Students) {
        res.status(404).json({
            message: "Field must not be empty!"
        });
    };

    const classData = {
        Class: req.body.Class,
        streams: req.body.streams,
        monitor_name: req.body.monitor_name,
        class_teacher: req.body.class_teacher,
        subjects: req.body.subjects,
        fees: req.body.fees,
        section: req.body.section,
        no_Of_Male_students: req.body.no_Of_Male_students,
        no_Of_Female_students: req.body.no_Of_Female_students,
        no_Of_Students: req.body.no_Of_Students,
    };

    Class.create(classData)
        .then((data) => {
            res.status(201).json(data);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Occurring error while creating class data!"
            });
        });

};

// Retrieve all the data of class
module.exports.getAllClassData = (req, res) => {
    const Class_No = req.query.Class;
    // const section = req.query.section;
    const condition = Class_No ? { Class: { [Op.iLike]: `%${Class_No}%` } } : null;

    Class.findAll({
        where: condition
    })
        .then((data) => {
            res.status(201).json(data);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Occurring error while retrieving class data!"
            });
        });

};

// Retrieve a single class data
module.exports.getSingleClassData = (req, res) => {
    const id = req.query.id;

    Class.findByPk(id)
        .then((data) => {
            res.status(201).json(data);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Occurring error while retrieving class data!"
            });
        });

};

// Update a class data with id
module.exports.updateClassData = (req, res) => {
    const id = req.query.id;

    Class.update(req.body, {
        where: {
            id: id
        }
    }).then((num) => {
        if (num == 1) {
            res.status(201).json({
                message: `Class with this ${id} Updated successfully!`
            });
        } else {
            res.json(404).json({
                message: `Can't update class with this id: ${id}`
            });
        };
    }).catch(err => {
        res.status(500).json({
            message: err.message || `Occurring error while updating data of class`
        });
    })

};

// Delete a single data of the class
module.exports.deleteSingleClass = (req, res) => {
    const id = req.query.id;

    Class.destroy({
        where: {
            id: id
        }
    }).then((num) => {
        if (num == 1) {
            res.status(200).json({
                message: `Class with this id ${id} deleted successfully!`
            });
        } else {
            res.json(404).json({
                message: `Can't delete the class with this id: ${id}`
            });
        };
    }).catch(err => {
        res.status(500).json({
            message: err.message || `Occurring error while deleting data of class`
        });
    })

};

// Delete all the data of the class
module.exports.deleteAllClasses = (req, res) => {
    Class.destroy({
        where: {}
    }).then(num => {
        res.status(200).json({
            message: `${num} Numbers of class data deleted successfully!`
        });
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Occurring error while deleting data of class!"
        })
    });

};

