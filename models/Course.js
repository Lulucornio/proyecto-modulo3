

const mongoose = require('mongoose');  // with this line(among others)we are able to connect to our db

const CourseSchema = new mongoose.Schema({      // describes the course schema 
 courseCode: {
    type: String,
    unique: true,
    required: [true, "Este campo es requerido"],
    index: true,                                             // sets the fields and required attributes it must have
  },                         
  courseName: {
    type: String,
  } 
      
},{collection: "courses", timestamps: true});                // sets the name of the actual schema

CourseSchema.methods.publicData = () => {                        // get and set for course schema
  return {
    id: this.id,
    courseCode: this.courseCode,
    courseName: this.courseName,
    
 
  };
};

mongoose.model("courses", CourseSchema); 


