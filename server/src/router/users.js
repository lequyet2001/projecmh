const express = require('express');
const router = express.Router();
const user=require('../Controller/userController');

router.get('/',user.getAllUsers);

module.exports = router;