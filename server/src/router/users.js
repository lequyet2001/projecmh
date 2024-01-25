const express = require('express');
const router = express.Router();
const user=require('../Controller/userController');

router.get('/',user.getAllUsers);
router.get('/Login',user.Login);
router.post('/Signup',user.Signin);
router.get('/:user_id',user.getUser);
module.exports = router;