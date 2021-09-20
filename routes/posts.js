const router = require('express').Router();

const {
    createPost,
    getPost,
    getUserPost,
    deletePost,
    updatePost,
    filterPost
} = require('../controllers/posts');


router.get('/', getPost);
router.get('/list/:author', getUserPost);
router.get('/topics', filterPost);
router.get('/:id', getPost);
router.post('/', createPost);
router.delete('/:id', deletePost)
router.put('/:id', updatePost)



module.exports = router;
    