 

// class User{
//     constructor(id,username,name,lastName,email,password,githubUser,type,avatar,cursos,followers){
//         this.id=id,
//         this.username=username,
//         this.name=name,
//         this.lastName=lastName,
//         this.email=email,
//         this.password=password,
//         this.githubUser=githubUser,
//         this.type=type,
//         this.avatar=avatar,
//         this.cursos=cursos,
//         this.followers=followers
//     }
// }

// module.exports=User

// FROM HERE
 

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      // unique: true,
      required: [true, "Este campo es requerido"],
      index: true,
    },
    name: {
      type: String,
      required: [true, "Este campo es requerido"],
    },
    lastName: {
      type: String,
      required: [true, "Este campo es requerido"],
    },
    email: {
      type: String,
      // unique: true,
      required: [true, "Este campo es requerido"],
      match: [/\S+@\S+\.\S+/, "es inválido"],
      index: true,
    },
    githubUser: {
      type: String,
      // unique: true,
    },

    password: { type: String, required: "Este campo es requerido" },
    hash: String, //este campo se utilizará para la sesión
    salt: String, //este campo se utilizará para la sesión
    
    type: { type: String, enum: ["Profesor", "Alumno"] },
  
    avatar : {
      type: String,
      default: function() {
         if (this.type === "Profesor") {
            return "https://github.com/IdrisDW/proyecto-modulo3/raw/desarrollo/apiImages/teacher.png";
         } else {
            return "https://github.com/IdrisDW/proyecto-modulo3/raw/desarrollo/apiImages/student.png";
         }
        }
    },
    courses: {type: mongoose.Schema.Types.ObjectId, ref:'Course'},
    followers: Number,
    bioDescription: { type: String , maxLength: 350},
   
  },
  { collection: "users", timestamps: true }
);

UserSchema.methods.publicData = () => {
  return {
    id: this.id,
    username: this.username,
    name: this.nombre,
    lastName: this.apellido,
    email: this.email,
   githubUser: this.tipo,
    password: this.password,
    type : this.type,
    avatar: this.avatar,
    courses: this.courses,
    followers:this.followers,
    bioDescription:this.bioDescription
    
  };
};

mongoose.model("users", UserSchema);
