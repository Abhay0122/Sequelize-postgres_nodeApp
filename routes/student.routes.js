module.exports = app => {
    const express = require("express");
    const router = express.Router();

    const {
        createStudentDets,
        getAllStudentsDets,
        getSingleStudent,
        updateStudent,
        deleteSingleStudent,
        deleteAllStudents,
    } = require("../controllers/student.controller");

    // Adding students data in students's model 
    router.post('/create-student', createStudentDets);
    // retrieving all students data
    router.get('/get-allStudents', getAllStudentsDets);
    //get single student's data by id
    router.get('/get-singleStudent/:id', getSingleStudent);
    // update a student's by id
    router.put('/update-student/:id', updateStudent);
    // Delete a single student by id
    router.delete('/delete-student/:id', deleteSingleStudent);
    // Delete All students
    router.delete('/delete-student', deleteAllStudents);


    app.use("/api/students", router);
}