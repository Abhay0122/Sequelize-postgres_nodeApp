require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// db
const db = require("./models")
db.sequelize.sync().then(() => {
    console.log("synced!")
}).catch(err => {
    console.log(err)
});

// 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// simple-test-route
app.get("/", (req, res) => {
    res.json({ message: "Api is working fine...." })
})

//STUDENT-/api/students 
require("./routes/student.routes")(app);
//TEACHER-/api/teachers
require("./routes/teacher.routes")(app);
//CLASS-/api/classes 
require("./routes/class.routes")(app);
//SUBJECT-/api/subjects
require("./routes/subject.routes")(app);
//COURSE-/api/courses
require("./routes/course.routes")(app);
//GAME-/api/games
require("./routes/game.routes")(app);


// PORT listing...
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});



