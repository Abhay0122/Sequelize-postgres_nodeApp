const db = require("../models/index")
const Course = db.courses;
const Op = db.Sequelize.Op;

// Create and Save a new course data
module.exports.createCourse = (req, res) => {
    // validate request
    if (!req.body.subject || !req.body.course_name || !req.body.no_Of_Students ||
        !req.body.teacher_name) {
        res.status(404).json({
            message: "Field must not be empty!"
        });
    };

    const courseData = {
        streams: req.body.streams,
        teacher_name: req.body.teacher_name,
        subject: req.body.subject,
        course_name: req.body.course_name,
        no_Of_Students: req.body.no_Of_Students,
        fees: req.body.fees,
    };

    Course.create(courseData)
        .then((data) => {
            res.status(201).json(data);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Occurring error while creating course data!"
            });
        });

};

// Retrieve all the data of courses
module.exports.getAllCoursesData = (req, res) => {
    const course_name = req.query.course_name;
    const condition = course_name ? { course_name: { [Op.iLike]: `%${course_name}%` } } : null;

    Course.findAll({
        where: condition
    })
        .then((data) => {
            res.status(201).json(data);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Occurring error while retrieving course data!"
            });
        });

};

// Retrieve a single course data
module.exports.getSingleCourseData = (req, res) => {
    const id = req.query.id;

    Course.findByPk(id)
        .then((data) => {
            res.status(201).json(data);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Occurring error while retrieving course data!"
            });
        });

};

// Update a course data with id
module.exports.updateCourseData = (req, res) => {
    const id = req.query.id;

    Course.update(req.body, {
        where: {
            id: id
        }
    }).then((num) => {
        if (num == 1) {
            res.status(201).json({
                message: `Course with this ${id} Updated successfully!`
            });
        } else {
            res.json(404).json({
                message: `Can't update course with this id: ${id}`
            });
        };
    }).catch(err => {
        res.status(500).json({
            message: err.message || `Occurring error while updating data of course`
        });
    })

};

// Delete a single data of the course
module.exports.deleteSingleCourse = (req, res) => {
    const id = req.query.id;

    Course.destroy({
        where: {
            id: id
        }
    }).then((num) => {
        if (num == 1) {
            res.status(200).json({
                message: `Course with this id ${id} deleted successfully!`
            });
        } else {
            res.json(404).json({
                message: `Can't delete the course with this id: ${id}`
            });
        };
    }).catch(err => {
        res.status(500).json({
            message: err.message || `Occurring error while deleting data of course`
        });
    })

};

// Delete all the data of the course
module.exports.deleteAllCourse = (req, res) => {
    Course.destroy({
        where: {}
    }).then(num => {
        res.status(200).json({
            message: `${num} Numbers of course data deleted successfully!`
        });
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Occurring error while deleting data of course!"
        })
    });

};

