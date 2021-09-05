const router = require('express').Router();
router.get('/', (req, res) => {
    res.send('Welcome to Bedu Social')
})


router.use('/posts', require('./posts'));
router.use('/users', require('./users'));
router.use('/courses', require('./courses'));

module.exports = router;
