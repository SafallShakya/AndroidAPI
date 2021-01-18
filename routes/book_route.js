const express=require('express');
const router=express.Router();
const Book=require('../models/book_model');

router.post('/book_insert',function(req,res){
    const book_name=req.body.book_name;
    const book_author= req.body.book_author;
    const book_pub_date=req.body.book_pub_date;
    const data=new Book({
        book_name:book_name,
        book_author:book_author,
        book_pub_date:book_pub_date,
    });
    data.save();
})

//for delete
router.delete('/book_delete/:id', function(req,res){
    const id22=req.params.id;
    Book.deleteOne({_id:id22}).then(function(){
        res.send("deleted!!");
    })

})

//for update

router.put('/book_update/:id',function(req,res){
    const id=req.params.id;
    Book.updateOne({_id:id},req.body).then(function(){
        res.status(200).json({
            message:"Success"
        })
    
    }).catch((error)=>{
        res.status(404).json({
            error:"error"
        })
    })

})

router.get('/book_show',function(req,res){
    Book.find().then(function(data){
        res.send(data);
    })
})
module.exports=router;

