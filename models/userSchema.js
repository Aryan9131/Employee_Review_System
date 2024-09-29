const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    profile:{
        type:String
    },
    assignFeedBacksToUser:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"AssignFeeds"
        }
    ]

})

const User=mongoose.model('User', userSchema);
module.exports=User;