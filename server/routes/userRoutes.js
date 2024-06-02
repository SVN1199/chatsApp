const router = require('express').Router()
const { register, login, getUser, sendRequest } = require('../controllers/userControllers')

router.post('/register', register)
router.post('/login', login)
router.get('/getUser/:userId', getUser)
router.post('/sendRequest', sendRequest)

module.exports = router