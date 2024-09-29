const Feedback=require("../models/feedbacks");
const User=require('../models/userSchema');
const AssignFeeds=require("../models/assignFeedbacks");
module.exports.home=async function(req, res){
    if(req.user && req.user.profile=="employee"){
        const feedbacks=await Feedback.find({feedbackToUser :req.user._id}).populate('feedbackToUser').populate('feedbackFromUser');
        const assignFeeds=await AssignFeeds.find({assignUserName :req.user._id}).populate('assignUserName').populate('feedbackToUserName');
        return res.render('home',{
            feedbacks:feedbacks,
            assignFeeds:assignFeeds
        });
    }else if(req.user && req.user.profile=="admin"){
        const allUsers=await User.find().populate({
            path:'assignFeedBacksToUser',
            populate: [ // Then populate both assignUserName and feedbackToUserName from AssignFeeds
                { path: 'assignUserName', model: 'User', select: 'name' },   // Populate the user who assigns feedback
                { path: 'feedbackToUserName', model: 'User', select: 'name' } // Populate the user receiving feedback
            ]
        });
        console.log("allUsers->"+JSON.stringify(allUsers));
        return res.render('admin',{
            registerUsers:allUsers
        });
    }else{
        return res.render('home');
    }
    
}