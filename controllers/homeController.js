const Feedback=require("../models/feedbacks");
const User=require('../models/userSchema');
const AssignFeeds=require("../models/assignFeedbacks");
module.exports.home=async function(req, res){
    if(req.user && req.user.profile=="employee"){
        const feedbacks=await Feedback.find({feedbackToUser :req.user.name});
        const assignFeeds=await AssignFeeds.find({assignUserName :req.user.name});
        return res.render('home',{
            feedbacks:feedbacks,
            assignFeeds:assignFeeds
        });
    }else if(req.user && req.user.profile=="admin"){
        const allUsers=await User.find();
        return res.render('admin',{
            registerUsers:allUsers
        });
    }else{
        return res.render('home');
    }
    
}