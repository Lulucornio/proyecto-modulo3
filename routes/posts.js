const router = require('express').Router();

const {
    createPost,
    getPost,
    getUserPost,
    deletePost,
    updatePost
} = require('../controllers/posts');


router.get('/', getPost);
router.get('/:id', getPost);
router.get('/list/:author', getUserPost);
router.post('/', createPost);
router.delete('/:id', deletePost)
router.put('/:id', updatePost)



module.exports = router;
    