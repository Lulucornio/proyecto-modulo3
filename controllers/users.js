const mongoose = require("mongoose")
const User = mongoose.model("User")

function createUser(req,res,next){ // function to create user, it will iterate and save if it detects an error it will show a message
    var user = new User(req.body)
 
    user.save().then(user => {
      return res.status(200).send(user)
    }).catch(next)
}

/* function getUser(req,res,next) {
  User.findById(req.user.id, (err, user) => {
    if (!user || err) {
      return res.sendStatus(401)
    }
    return res.send(user);
  }).catch(err => res.send(err));
} */


function getUser(req,res,next){
   User.findById(req.params.id) 
      .then(user =>{
        return res.status(200).send(user)
      }).catch(next)
}
// function getUser(req,res){
//     var user = new User(1,'tomato1','Tomas','Cruz','tomas@mail.com','123asd','tomatoe','alumno','url',[{id:23421}, {id: 34532}],95)
//     res.status(200).send(user)
// }

// function updateUser(req,res){
//     var user=new User(req.params.id,'tomato1','Tomas','Cruz','tomas@mail.com','123asd','tomatoe','alumno','url',{code:1, name: 'Javascript'},95)
//     var updated=req.body
//     user={...user,...updated}
//     res.send(user)
// }

module.exports={ // defining the functions we have
    createUser,
    getUser/*,
    updateUser */
}