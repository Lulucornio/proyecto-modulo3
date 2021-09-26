const router=require('express').Router()

const{
    createUser,
    getUser,
    getUserbyField,
    deleteUser,
    updateUser
}=require('../controllers/users')

router.get('/',getUser)
router.get('/field',getUserbyField)
router.get('/:id',getUser)
router.post('/',createUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

module.exports=router;