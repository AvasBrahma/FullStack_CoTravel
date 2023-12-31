const express=require('express');
const router=express.Router();
const usersApi=require('../../../controller/api/v1/user_controller');

router.post('/login', usersApi.login);

router.post('/signup', usersApi.signUp);

router.post('/edit', usersApi.updateProfile);



module.exports=router;