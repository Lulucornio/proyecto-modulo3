const router = require('express').Router();

const {
    getCourse
} = require('../controllers/courses');


router.get('/', getCourse);
router.get('/:id', getCourse);


module.exports = router;