const mongoose=require('mongoose');

const feedbackSchema=new mongoose.Schema({
    feedbackFromUser:{
        type:String
    },
    feedbackToUser:{
        type:String
    },
    feedbackData:{
        type:String
    }  
})

const Feedback=mongoose.model('Feedback', feedbackSchema);
module.exports=Feedback;