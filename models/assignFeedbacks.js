const mongoose=require('mongoose');

const assignFeeds=new mongoose.Schema({
    assignUserName:{
        type:String
    },
    feedbackToUserName:{
        type:String
    }  
})

const AssignFeeds=mongoose.model('AssignFeeds', assignFeeds);
module.exports=AssignFeeds;