module.exports = app => {
    const router = require("express").Router();

    const {
        createSubject,
        getAllSubjectsData,
        getSingleSubjectData,
        updateSubjectData,
        deleteSingleSubject,
        deleteAllSubjects } = require("../controllers/subject.controller");


    // create and save a subject data
    router.post("/create-subject", createSubject)
    // retrieve all data of the subjects
    router.get("/get-AllSubject-Data", getAllSubjectsData)
    //get single subject data
    router.get('/get-singleSubject-Data', getSingleSubjectData);
    // update a subject data  
    router.put('/update-subject-data', updateSubjectData);
    // Delete a single subject data
    router.delete('/delete-single-subject', deleteSingleSubject);
    // Delete all subject data
    router.delete('/delete-allSubject', deleteAllSubjects);

    // 
    app.use("/api/subjects", router)

};