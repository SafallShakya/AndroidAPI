const mongoose=require('mongoose');

const Favorite=mongoose.model('Favorite',{
    user_id:{
        type : String,
        required : true
    },
    pet_id:{
        type:String,
        required : true
    },
})
module.exports=Favorite;