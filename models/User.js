
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true, // must be unique so we wont have duplicates
      required: [true, "Este campo es requerido"], // gotta have a username
      index: true // certain fields have index set to true to make querys faster and access this  data with ease
    },
    name: {
      type: String,
      required: [true, "Este campo es requerido"]
    },
    lastName: {
      type: String,
      required: [true, "Este campo es requerido"]
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Este campo es requerido"],
      match: [/\S+@\S+.\S+/, "Email inválido"], // using regex we can make sure the email follows a correct format
      index: true
    },
    githubUser: {
      type: String,
      unique: true
    },
    password: { type: String, required: "Este campo es requerido" }, // Must have a password
    hash: String, //este campo se utilizará para la sesión
    salt: String, //este campo se utilizará para la sesión
    typeA: { type: String, enum: ["Profesor", "Alumno"] },
    avatar : {  // the avatar is defined by the type that has been set, you dont need to specify it using the post method, it will automatically set it to teacher or student
      type: String,
      default: function() {
         if (this.typeA === "Profesor") {
            return "https://github.com/IdrisDW/proyecto-modulo3/raw/desarrollo/apiImages/teacher.png";
         } else {
            return "https://github.com/IdrisDW/proyecto-modulo3/raw/desarrollo/apiImages/student.png";
         }
        }
    },
    courses: {type: [mongoose.Schema.Types.ObjectId], ref:'courses'}, // courses is obtained from the DB where our courses have been previously defined and we can set multiple courses to one user with the course ID
    followers: Number, // accurate field type definition 
    bioDescription: { type: String , maxLength: 350}, // limiting the lenght of the description , although this could also be defined with front end
  },
  { collection: "users", timestamps: true }
);

UserSchema.methods.publicData = function () {  // here we get and set our fields 
  return {
    id: this.id,
    username: this.username,
    name: this.name,
    lastName: this.lastName,
    email: this.email,
    githubUser: this.githubUser,
    password: this.password,
    type : this.type,
    avatar: this.avatar,
    courses: this.courses,
    followers:this.followers,
    bioDescription:this.bioDescription 
  }
}

mongoose.model("User", UserSchema);
