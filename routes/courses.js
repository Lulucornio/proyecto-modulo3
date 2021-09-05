const router = require('express').Router();

const {
    getAllCourses,
    getCourse
} = require('../controllers/courses');


router.get('/', getAllCourses);
router.get('/:id', getCourse);

module.exports = router;