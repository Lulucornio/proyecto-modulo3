/* */
const mongoose = require('mongoose');
const Post = mongoose.model("Post");
const  ObjectId = require('mongodb').ObjectId;

function createPost(req, res, next){ // OK
    let post = new Post(req.body);
    post.save().then( (post) =>{
        res.status(200).send(post);
    }).catch(next);
}

function getPost(req, res, next){ //OK
    const query = req.query;
    if(req.params.id){ 
        Post.findById(req.params.id) 
        .then( (post) => {
            res.send(post)
        })
        .catch(next)
    } else {
        if(query){
            Post.aggregate([       
                {
                    '$limit': parseInt(query.limit)
                }
            ]).then(r => {
                res.status(200).send(r)
            })
            .catch(next);
        }else{
            Post.find() 
            .then((posts)=>{ res.send(posts)})
            .catch(next)
        }
     
    }
}


function getUserPost(req, res, next){ // OK
    let user = req.params.author;
    Post.aggregate([
        {
            '$match': {
                'author': new ObjectId(`${user}`) // Revisar bien para qué sirve el new
            }
        }
    ])
    .then(r => {
        res.status(200).send(r)
    })
    .catch(next);
}


function deletePost(req, res, next){ //OK
    Post.findOneAndDelete({_id:req.params.id})
    .then((response)=>{ res.status(200).send('Post eliminado correctamente')
    })
    .catch(next)
}


// Update functionality added (Id and Author can not be updated) 
function updatePost(req, res, next){ // OK
    Post.findById(req.params.id)
    .then(post => {
        if(!post){
            return res.sendStatus(401) 
        }

        let newData = req.body
        if(typeof newData.title !== "undefined"){
            post.title = newData.title;
        }

        if(typeof newData.description !== "undefined"){
            post.description = newData.description;
        }

        if(typeof newData.topic !== "undefined"){
            post.topic = newData.topic;
        }

        post.save()
        .then(updated => {                                   
        res.status(201).json(updated.publicData())})
        .catch(next)
    })
    .catch(next);
}

//This won't apply for insensitive cases, so using the front end that would be controlled

function filterPost(req, res, next){ //OK    //Se sugiere remover "limit", se ha agregado en el servicio GetPosts
    const query = req.query;
    const topics = query.topics.split(',')
    Post.aggregate([
        {
            '$match': {
                'topic' : { '$in' : topics}
            }
        },

        {
            '$limit': parseInt(query.limit)
        }
    ])
    .then(r => {
        res.status(200).send(r)
        
    })
    .catch(next);
}


module.exports = {
    createPost,
    getPost,
    getUserPost, 
    deletePost,
    updatePost,
    filterPost
}





