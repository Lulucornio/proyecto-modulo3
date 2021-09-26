/* */
const mongoose = require('mongoose');
const Post = mongoose.model("Post");
const  ObjectId = require('mongodb').ObjectId;

function createPost(req, res, next){ // OK
    let post = new Post(req.body);
    post.save().then((post) =>{
        res.status(200).send(post);
    }).catch(next);
}

function getPost(req, res, next){ //OK
    
    if (req.params.id){ // Case for an Specific Id
        Post.findById(req.params.id)
        .then((post) => {
            res.send(post);

        })
        .catch(next);
    }
    else {
        const query = req.query;
        
        if (query.limit || query.topics){ // Filter will be applied, sensitive cases on topics
            
            const limit = query.limit ? parseInt(query.limit) : query.limit;
            const topics = query.topics ? query.topics.split(',') : query.topics;
            let aggregation = [];

            const matchTopics = {
                '$match': {
                    'topic' : { '$in' : topics}
                }
            };
            
            const setLimit = {
                '$limit': limit
            };

            aggregation = topics && limit ? [matchTopics, setLimit] : topics ? [matchTopics] : [setLimit];
            
            Post.aggregate(aggregation)
            .then(r => {
                res.status(200).send(r)
            })
            .catch(next);

        }
        else { // All Posts (no filter)
            Post.find() 
            .then((posts)=>{ res.send(posts)})
            .catch(next);

        }

    }
    
}


function getUserPost(req, res, next){ // OK
    let user = req.params.author;
    Post.aggregate([
        {
            '$match': {
                'author': new ObjectId(`${user}`) 
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


module.exports = {
    createPost,
    getPost,
    getUserPost, 
    deletePost,
    updatePost
}





