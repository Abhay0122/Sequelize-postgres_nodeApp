const db = require("../models/index")
const Subject = db.Subjects;
const Op = db.Sequelize.Op;

// Create and Save a new subject data
module.exports.createSubject = (req, res) => {
    // validate request
    if (!req.body.subject || !req.body.Class || !req.body.no_Of_Students) {
        res.status(404).json({
            message: "Field must not be empty!"
        });
    };

    const subjectData = {
        Class: req.body.Class,
        streams: req.body.streams,
        teacher_name: req.body.teacher_name,
        subject: req.body.subject,
        course_name: req.body.course_name,
        no_Of_Students: req.body.no_Of_Students,
    };

    Subject.create(subjectData)
        .then((data) => {
            res.status(201).json(data);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Occurring error while creating subject data!"
            });
        });

};

// Retrieve all the data of subject
module.exports.getAllSubjectsData = (req, res) => {
    const subject = req.query.subject;
    const condition = subject ? { subject: { [Op.iLike]: `%${subject}%` } } : null;

    Subject.findAll({
        where: condition
    })
        .then((data) => {
            res.status(201).json(data);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Occurring error while retrieving subject data!"
            });
        });

};

// Retrieve a single subject data
module.exports.getSingleSubjectData = (req, res) => {
    const id = req.query.id;

    Subject.findByPk(id)
        .then((data) => {
            res.status(201).json(data);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Occurring error while retrieving subject data!"
            });
        });

};

// Update a subject data with id
module.exports.updateSubjectData = (req, res) => {
    const id = req.query.id;

    Subject.update(req.body, {
        where: {
            id: id
        }
    }).then((num) => {
        if (num == 1) {
            res.status(201).json({
                message: `Subject with this ${id} Updated successfully!`
            });
        } else {
            res.json(404).json({
                message: `Can't update subject with this id: ${id}`
            });
        };
    }).catch(err => {
        res.status(500).json({
            message: err.message || `Occurring error while updating data of subject`
        });
    })

};

// Delete a single data of the subject
module.exports.deleteSingleSubject = (req, res) => {
    const id = req.query.id;

    Subject.destroy({
        where: {
            id: id
        }
    }).then((num) => {
        if (num == 1) {
            res.status(200).json({
                message: `Subject with this id ${id} deleted successfully!`
            });
        } else {
            res.json(404).json({
                message: `Can't delete the subject with this id: ${id}`
            });
        };
    }).catch(err => {
        res.status(500).json({
            message: err.message || `Occurring error while deleting data of subject`
        });
    })

};

// Delete all the data of the subject
module.exports.deleteAllSubjects = (req, res) => {
    Subject.destroy({
        where: {}
    }).then(num => {
        res.status(200).json({
            message: `${num} Numbers of subject data deleted successfully!`
        });
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Occurring error while deleting data of subject!"
        })
    });

};

