const mongoose = require("mongoose")
const User = mongoose.model("User")

function createUser(req,res,next){ // function to create user, it will iterate and save if it detects an error it will show a message
    var user = new User(req.body)
 
    user.save().then(user => {
      return res.status(200).send(user)
    }).catch(next)
}

function getUser(req, res, next){ //OK
    if(req.params.id){
        User.findById(req.params.id) 
          .then(user =>{
              res.send(user)
          }).catch(next)
    }
    else {
        User.find()
        .then(user=>{res.send(user)}).catch(next)
        }
}


function getUserbyField(req, res, next){  //get user by name, lastname, email or username
    const query = req.query;
     if(query) {
        const name = query.name
        const lastName= query.lastName
        const email= query.email
        const username= query.username
            if(query.name){
                User.aggregate([       
                    {
                        '$match': {
                            'name' : { '$regex' : name, $options: '-i' }
                        }
                    }
                ]).then(r => {res.status(200).send(r)}).catch(next);
            }
            else if(query.lastName){
                User.aggregate([       
                    {
                        '$match': {
                            'lastName' : { '$regex' : lastName, $options: '-i' }
                        }
                    }
                ]).then(r => {res.status(200).send(r)}).catch(next);
            }
            else if(query.username){
                User.aggregate([       
                    {
                        '$match': {
                            'username' : username
                        }
                    }
                ]).then(r => {res.status(200).send(r)}).catch(next);
            }
            else if(query.email){
                User.aggregate([       
                    {
                        '$match': {
                            'email' : email
                        }
                    }
                ]).then(r => {res.status(200).send(r)}).catch(next);
            }
        }
}


function updateUser(req, res, next) { 
  User.findById(req.params.id)
      .then(user => {
        // Allowed properties to be updated: name, lastname, githubHuser,courses, bioDescription
          if (!user) { return res.sendStatus(404); }
          let newInfo = req.body
          if (typeof newInfo.followers !== "undefined"){
            user.followers = newInfo.followers
          }else if(typeof newInfo.password !== "undefined"){
            user.password = newInfo.password
          }else{
            if (typeof newInfo.name !== "undefined")
                user.name = newInfo.name
            if (typeof newInfo.lastName !== "undefined")
                user.lastname = newInfo.lastName
            if (typeof newInfo.githubUser !== 'undefined')
                user.githubUser = newInfo.githubUser
            if (typeof newInfo.courses !== 'undefined')
                user.courses = newInfo.courses
            if (typeof newInfo.bioDescription !== 'undefined')
                user.bioDescription = newInfo.bioDescription
          }
          user.save()
              .then(updated => {
                  res.status(201).json(updated.publicData())
              })
              .catch(next)
      })
      .catch(next)
}

function deleteUser(req, res, next) {
  User.findOneAndDelete({ _id:req.params.id})
      .then(r => { res.status(200).send("El usuario se ha eliminado") })
      .catch(next)
}

module.exports={ // defining the functions we have
    createUser,
    getUser,
    getUserbyField,
    deleteUser,
    updateUser    
}