const Post = require('../models/Post');

function createPost(req, res) {
    let post = new Post();
    res.status(200).send(post);
}

//For getting all posts in feed
function getAllPosts(req, res) {
  
    res.send([]);
}
//For getting a list of posts from a specific user
function getUserPost(req, res) {

    res.send([]);
}
    
function deletePost(req, res) {

    res.status(200).send(`Post ${req.params.id} eliminado`);    
}
  

// Won't be possible to update a post, it should be deleted

module.exports = {
    createPost,
    getAllPosts,
    getUserPost,
    deletePost
}
