const router=require('express').Router()

const{
    createUser,
    getUser,
    updateUser
}=require('../controllers/users')

router.get('/',getUser)
router.post('/',createUser)
router.put('/:id',updateUser)

module.exports=router;