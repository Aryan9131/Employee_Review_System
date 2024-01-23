const Feedback = require('../models/feedbacks');
const AssignFeedback=require('../models/assignFeedbacks');
const User=require('../models/userSchema');
module.exports.signUp=function(req, res){
    return res.render('signUp');
}
module.exports.createUser=async function(req, res){
    try {
        const newUser=new User(req.body);
        await newUser.save();
        return res.redirect('/users/sign-in');
    } catch (error) {
        console.log("Uable to make User : "+error);
        return res.redirect('back');
    }
    
}
module.exports.signIn=function(req, res){
    return res.render('signIn');
}
module.exports.createSession=function(req, res){
    if(req.user.profile=="admin"){
        return res.redirect('/admin')
    }else{
        return res.redirect('/')
    }
    
}
module.exports.destroySession = function (req, res, next) {
    // Logging out the user and handling errors if any
    req.logout(function (err) {
        if (err) {
            console.log("Error while logging out user:", err);
            return next(err);
        }
        // Redirecting to the home page after successful logout
        return res.redirect('/');
    });
}
module.exports.createFeedback=async function(req, res){
    const newFeed=new Feedback({
        feedbackFromUser:req.user.name,
        feedbackToUser:req.body.toUser,
        feedbackData:req.body.feedback
    });
    await newFeed.save();
    const deletedAssign=await AssignFeedback.deleteOne({assignUserName: req.user.name, feedbackToUserName: req.body.toUser})
    return res.redirect('/');
}

module.exports.assignFeedback=async function(req, res){
      const newFeedbackAssign=new AssignFeedback({
        assignUserName : req.body.assignedTo,
        feedbackToUserName : req.body.assignedOf
      })
      await newFeedbackAssign.save();
      return res.redirect('back');
}

module.exports.deleteUser=async function(req, res){
    //delete feedbacks , assigned user, user of this
    const user=await User.findOne({_id:req.params.id});
    const delFeed=await Feedback.deleteOne({feedbackToUser :user.name});
    const delAssigend=await AssignFeedback.deleteMany({$or: [{assignUserName: user.name }, {feedbackToUserName: user.name}]});
    const deletedUser=await User.deleteOne({_id:req.params.id});
    return res.redirect('back');
}