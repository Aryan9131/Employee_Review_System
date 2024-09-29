const mongoose=require('mongoose');

const feedbackSchema=new mongoose.Schema({
    feedbackFromUser:{
         type:mongoose.SchemaTypes.ObjectId,
         ref:"User"
    },
    feedbackToUser:{
         type:mongoose.SchemaTypes.ObjectId,
         ref:"User"
    },
    feedbackData:{
        type:String
    }  
})

const Feedback=mongoose.model('Feedback', feedbackSchema);
module.exports=Feedback;