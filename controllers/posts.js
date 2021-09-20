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

    if(req.params.id){ 
        Post.findById(req.params.id) // For getting a specific post to delete it 
        .then( (post) => {
            res.send(post)
        })
        .catch(next)
    } else {
        Post.find() // This is for the complete feed ? {Would be necessary set a limit} 
        .then((posts)=>{ res.send(posts)})
        .catch(next)
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


// Update functionality added (Id and Author cannot be updated) 
function updatePost(req, res, next){ // OK

    Post.findById(req.params.id)
    .then(post => {
        if(!post){
            return res.send(401) 
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


// Topic Filter, Múltiple filter, requires an array in body with the list of topics to show
function filterPost(req, res, next){ //OK

    let topics = req.body;

    Post.aggregate([
        {
            '$match': {
                'topic' : { '$in' : topics.topics}
            }
        },

        {
            '$limit': topics.limit
          }
    ])
    .then(r => {
        res.status(200).send(r)
    })
    .catch(next);
}

// For multiple topics could be possible to use the pipeline function in 



// Specific Qty of post
// Esto sería parte del front???


module.exports = {
    createPost,
    getPost,
    getUserPost, 
    deletePost,
    updatePost,
    filterPost
}



/*
Normal creation of a user:

{
	"title": "This post is created by another user",
	"description": "Test post",
	"topic": "HTML",
	"author": "6147eed99e437ce2098a5f88"
}


*/