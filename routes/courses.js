const router = require('express').Router();

const {
    getCourse
} = require('../controllers/courses');


router.get('/', getCourse);

module.exports = router;