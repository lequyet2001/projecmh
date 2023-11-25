const express = require('express');
const router = express.Router();
const user=require('../Controller/userController');

router.get('/',user.getAllUsers);
router.get('/Login',user.Login);
router.post('/Signin',user.Signin);
router.get('/EmailCheck',user.Check1);
router.get('/UserCheck',user.Check2);
module.exports = router;