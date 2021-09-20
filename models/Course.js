
// class Course {
//     constructor(id, name, code) {
//       this.id = id;
//       this.name = name;
//       this.code = code;
//     }
//   }

// module.exports = Course;
  

// FROM HERE



const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({      
 courseCode: {
    type: String,
    unique: true,
    required: [true, "Este campo es requerido"],
    index: true,
  },                         
  courseName: {
    type: String,
     
   
     
  } 
      
},{collection: "courses", timestamps: true});

CourseSchema.methods.publicData = () => {
  return {
    id: this.id,
    courseCode: this.courseCode,
    courseName: this.courseName,
    
 
  };
};

mongoose.model("courses", CourseSchema); 


