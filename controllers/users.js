const User=require('../models/User')

function createUser(req,res){
    var user=new User(req.body)
    res.status(200).send(user)
}

function getUser(req,res){
    var user = new User(1,'tomato1','Tomas','Cruz','tomas@mail.com','123asd','tomatoe','alumno','url',[{id:23421}, {id: 34532}],95)
    res.status(200).send(user)
}

function updateUser(req,res){
    var user=new User(req.params.id,'tomato1','Tomas','Cruz','tomas@mail.com','123asd','tomatoe','alumno','url',{code:1, name: 'Javascript'},95)
    var updated=req.body
    user={...user,...updated}
    res.send(user)
}

module.exports={
    createUser,
    getUser,
    updateUser
}