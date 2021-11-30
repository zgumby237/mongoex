// models/student.js
const db = require("../db");

const Student = db.model("Student", {
    name:      String,
    gpa:       { type: Number, min: 0, max: 4 },
});

module.exports = Student;