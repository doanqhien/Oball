const router  = require('express').Router();
const { verifiedToken } = require('../controllers/userControl');
const userControl = require('../controllers/userControl')
const auth  = require('../middleware/auth')

//Register
router.post('/register',userControl.registerUser)

//Login
router.post('/login',userControl.loginUser)

//verify login
router.get('/verify',userControl.verifiedToken)

module.exports = router;