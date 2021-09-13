/* */
const mongoose = require('mongoose');
const Post = mongoose.model("Post");

//
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


function getUserPost(req, res, next){

}


function deletePost(req, res, next){ //OK
    Post.findOneAndDelete({_id:req.params.id})
    .then((response)=>{ res.status(200).send('Post eliminado correctamente')
    })
    .catch(next)
    
}
// Won't be possible to update a post, it should be deleted



module.exports = {
    createPost,
    getPost,
    getUserPost, //Aggregation 
    deletePost
}