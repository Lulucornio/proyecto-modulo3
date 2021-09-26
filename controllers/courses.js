const mongoose = require("mongoose")
const Course = mongoose.model("Course") 

function getCourse(req, res) {
    res.send([]);
}

function getCourse(req,res,next){
    if(req.params.id){
        Course.findById(req.params.id) 
        .then(course =>{
            res.send(course)
        })
        .catch(next)
    }else{
        Course.find()
        .then(course=>{
            res.send(course)
        })
        .catch(next)
    }
  }

/* Los cursos estarán cargados previamente en la base de datos,
   por lo cual únicamente se podrá realizar su consulta
*/
module.exports = {
    getCourse
}
