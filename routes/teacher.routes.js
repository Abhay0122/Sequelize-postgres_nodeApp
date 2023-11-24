module.exports = app => {
    const router = require("express").Router();

    const {
        createTeacher,
        getAllTeachersData,
        getSingleTeacherData,
        updateTeacherData,
        deleteSingleTeacher,
        deleteAllTeacher
    } = require("../controllers/teacher.controller");


    // create and save a teacher's data
    router.post("/create-teacher", createTeacher)
    // retrieve all data of the teachers
    router.get("/get-AllTeachers-Data", getAllTeachersData)
    //get single teacher's 
    router.get('/get-singleTeacher-Data', getSingleTeacherData);
    // update a teacher;s data  
    router.put('/update-teacher-data', updateTeacherData);
    // Delete a single teacher
    router.delete('/delete-single-teacher', deleteSingleTeacher);
    // Delete all teacher
    router.delete('/delete-allTeacher', deleteAllTeacher);

    // 
    app.use("/api/teachers", router)

}