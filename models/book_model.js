const mongoose=require('mongoose');

const Book=mongoose.model('Book',{
    book_name:{
        type:String
    },
    book_author:{
        type:String
    },
    book_pub_date:{
        type:String
    }

});
module.exports=Book;