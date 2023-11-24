const db = require("../models");
const Student = db.students;
const Op = db.Sequelize.Op;

// Create and Save a new student data
module.exports.createStudentDets = (req, res, next) => {
    // validate request
    if (!req.body.student_name || !req.body.contact_no) {
        res.status(400).json({
            message: "Field must not be empty!"
        })
        return;
    };

    const student_info = {
        student_name: req.body.student_name,
        gender: req.body.gender,
        age: req.body.age,
        Class: req.body.Class,
        roll_No: req.body.roll_No,
        father_name: req.body.father_name,
        mother_name: req.body.mother_name,
        caste: req.body.caste,
        address: req.body.address,
        contact_no: req.body.contact_no
    };


    Student.create(student_info)
        .then((createdData) => {
            // console.log(createdData);
            res.status(201).send(createdData);
        }).catch(err => {
            // console.log(err.message)
            res.status(500).send({
                message: err.message || "some error ocurred while creating student details..."
            });
        });

};

// Retrieve all students details from database
module.exports.getAllStudentsDets = (req, res, next) => {
    const student_name = req.query.student_name;

    var condition = student_name ? { student_name: { [Op.iLike]: `%${student_name}%` } } : null;

    Student.findAll({ where: condition })
        .then((data) => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json({
                message: err.message || "Some error occurred while retrieving tutorials."
            })
        });
}

// Get single student data by id
module.exports.getSingleStudent = (req, res, next) => {
    const singleStudentData = req.params.id

    Student.findByPk(singleStudentData)
        .then((data) => {
            if (data) {
                res.status(200).json(data);
            } else {
                res.status(404).json({
                    message: `Can't find student with this id= ${singleStudentData}`
                });
            };
        }).catch(err => {
            res.status(500).json({
                message: err.message || "problem in retrieving data of the student with id"
            });
        });
};

// Update a single student with id
module.exports.updateStudent = (req, res, next) => {
    const id = req.params.id

    Student.update(req.body, {
        where: {
            id: id
        }
    }).then((num) => {
        if (num == 1) {
            res.status(200).json({
                message: "student updated successfully!"
            });
        } else {
            res.status(404).json({
                message: `Can't update student with this id: ${id}`
            });
        }
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Occurring Problem in updating student with id"
        });
    });

};

// Delete a single student with id
module.exports.deleteSingleStudent = (req, res, next) => {
    const id = req.params.id;

    Student.destroy({
        where: {
            id: id
        }
    }).then((num) => {
        if (num == 1) {
            res.status(200).json({
                message: `Student deleted successfully with this id: ${id}`
            });
        } else {
            res.status(404).json({
                message: `Student can't delete with this id: ${id}`
            })
        }
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Occurring error while deleting a student!"
        })
    });
};

// Delete all students 
module.exports.deleteAllStudents = (req, res, next) => {
    Student.destroy({
        where: {}
    }).then(num => {
        res.status(200).json({
            message: `${num} Numbers of Students's data deleted successfully!`
        });
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Occurring error while deleting students's data!"
        })
    });
};