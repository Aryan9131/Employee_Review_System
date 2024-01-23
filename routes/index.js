const express=require('express');
const homeController=require('../controllers/homeController')
const router=express.Router();
const db=require('../config/mongoose');

router.get('/',homeController.home);
router.get('/admin',homeController.home);

router.use('/users', require('./users'));
module.exports=router;