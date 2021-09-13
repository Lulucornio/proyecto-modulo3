const router = require('express').Router();

const {
    createPost,
    getPost,
    getUserPost,
    deletePost
} = require('../controllers/posts');


router.get('/', getPost);
router.get('/:id', getPost);
router.get('/:author', getUserPost);
router.post('/', createPost);
router.delete('/:id', deletePost)


module.exports = router;
    