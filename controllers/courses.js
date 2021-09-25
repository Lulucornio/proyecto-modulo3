const Course = require('../models/Course');
/* const mongoose = require("mongoose")
const Course = mongoose.model("Course") */
function getCourse(req, res) {
    res.send([]);
}


/* Los cursos estarán cargados previamente en la base de datos,
   por lo cual únicamente se podrá realizar su consulta
*/

module.exports = {
    getCourse
}
