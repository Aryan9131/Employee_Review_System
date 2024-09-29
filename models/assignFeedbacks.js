const mongoose=require('mongoose');

const assignFeeds=new mongoose.Schema({
    assignUserName:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User"
    },
    feedbackToUserName:{
         type:mongoose.SchemaTypes.ObjectId,
          ref:"User"
    }  
})

const AssignFeeds=mongoose.model('AssignFeeds', assignFeeds);
module.exports=AssignFeeds;