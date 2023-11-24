module.exports = app => {
    const router = require("express").Router();

    const {
        createClass,
        getAllClassData,
        getSingleClassData,
        updateClassData,
        deleteSingleClass,
        deleteAllClasses
    } = require("../controllers/class.controller");


    // create and save a class data
    router.post("/create-class", createClass)
    // retrieve all data of the classs
    router.get("/get-AllClass-Data", getAllClassData)
    //get single class data
    router.get('/get-singleClass-Data', getSingleClassData);
    // update a class data  
    router.put('/update-class-data', updateClassData);
    // Delete a single class data
    router.delete('/delete-single-class', deleteSingleClass);
    // Delete all class data
    router.delete('/delete-allClass', deleteAllClasses);

    // 
    app.use("/api/classes", router)

}