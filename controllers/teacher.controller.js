const db = require("../models/index")
const Teacher = db.teachers;
const Op = db.Sequelize.Op;

// Create and Save a new teacher's data
module.exports.createTeacher = (req, res) => {
    // validate request
    if (!req.body.teacher_name || !req.body.contact_no || !req.body.email) {
        res.status(404).json({
            message: "Field must not be empty!"
        });
    };

    const teacherData = {
        teacher_name: req.body.teacher_name,
        gender: req.body.gender,
        age: req.body.age,
        subject: req.body.subject,
        Class: req.body.Class,
        email: req.body.email,
        experience: req.body.experience,
        qualification: req.body.qualification,
        caste: req.body.caste,
        address: req.body.address,
        course_name: req.body.course_name,
        contact_no: req.body.contact_no
    };

    Teacher.create(teacherData)
        .then((data) => {
            res.status(201).json(data);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Occurring error while creating teacher data!"
            });
        });

};

// Retrieve all the data of teachers
module.exports.getAllTeachersData = (req, res) => {
    const email = req.query.email;
    const condition = email ? { email: { [Op.iLike]: `%${email}%` } } : null;

    Teacher.findAll({
        where: condition
    })
        .then((data) => {
            res.status(201).json(data);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Occurring error while retrieving teacher data!"
            });
        });

};

// Retrieve a single teacher data
module.exports.getSingleTeacherData = (req, res) => {
    const id = req.query.id;

    Teacher.findByPk(id)
        .then((data) => {
            res.status(201).json(data);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Occurring error while retrieving teacher data!"
            });
        });

};

// Update a teacher data with id
module.exports.updateTeacherData = (req, res) => {
    const id = req.query.id;

    Teacher.update(req.body, {
        where: {
            id: id
        }
    }).then((num) => {
        if (num == 1) {
            res.status(201).json({
                message: `Teacher with this ${id} Updated successfully!`
            });
        } else {
            res.json(404).json({
                message: `Can't update teacher with this id: ${id}`
            });
        };
    }).catch(err => {
        res.status(500).json({
            message: err.message || `Occurring error while updating teacher's data`
        });
    })

};

// Delete a single data of the teacher
module.exports.deleteSingleTeacher = (req, res) => {
    const id = req.query.id;

    Teacher.destroy({
        where: {
            id: id
        }
    }).then((num) => {
        if (num == 1) {
            res.status(200).json({
                message: `Teacher with this id ${id} deleted successfully!`
            });
        } else {
            res.json(404).json({
                message: `Can't delete the teacher with this id: ${id}`
            });
        };
    }).catch(err => {
        res.status(500).json({
            message: err.message || `Occurring error while deleting teacher's data`
        });
    })

};

// Delete all the data of the teachers
module.exports.deleteAllTeacher = (req, res) => {
    Teacher.destroy({
        where: {}
    }).then(num => {
        res.status(200).json({
            message: `${num} Numbers of teachers's data deleted successfully!`
        });
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Occurring error while deleting teachers's data!"
        })
    });

};

