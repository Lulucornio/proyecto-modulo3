const router = require('express').Router();

const {
    createPost,
    getAllPosts,
    getUserPost,
    deletePost
} = require('../controllers/posts');


router.get('/', getAllPosts);
router.get('/:author', getUserPost);
router.post('/', createPost);
router.delete('/:id', deletePost)


module.exports = router;
    