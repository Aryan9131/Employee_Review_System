const express=require('express');
const passport=require('passport');
const router=express.Router();
const userController=require('../controllers/userController')
router.get('/sign-up', userController.signUp);
router.post('/create-user', userController.createUser);
router.get('/sign-in', userController.signIn);
router.post('/create-session',passport.authenticate(
      'local',
       { failureRedirect:'/users/sign-in' }), 
     userController.createSession);
router.get('/sign-out',userController.destroySession);
router.post('/create-feedback',userController.createFeedback);
router.post('/assign-feedback',userController.assignFeedback);
router.get('/delete-user/:id', userController.deleteUser);
module.exports=router;