module.exports = app => {
    const router = require("express").Router();

    const {
        createCourse,
        getAllCoursesData,
        getSingleCourseData,
        updateCourseData,
        deleteSingleCourse,
        deleteAllCourse,
    } = require("../controllers/course.controller");


    // create and save a course data
    router.post("/create-course", createCourse)
    // retrieve all data of the courses
    router.get("/get-AllCourses-Data", getAllCoursesData)
    //get single course data
    router.get('/get-singleCourse-Data', getSingleCourseData);
    // update a course data  
    router.put('/update-course-data', updateCourseData);
    // Delete a single course data
    router.delete('/delete-single-course', deleteSingleCourse);
    // Delete all course data
    router.delete('/delete-allCourses', deleteAllCourse);

    // 
    app.use("/api/courses", router)

};