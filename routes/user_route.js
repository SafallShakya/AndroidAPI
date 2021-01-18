const express=require('express');
const router=express.Router();
const User=require('../models/user_model');

router.post('/user_insert',function(req,res){
    const us=req.body.us;
    const add= req.body.add;
    const email=req.body.email;
    const password=req.body.password;
    const data=new User(
        {
        username:us,
        address:add,
        email:email,
        password:password
    }
    );
    data.save();
    // console.log(us);
    // console.log(add);
})

router.get('/show',function(req,res){
    User.find().then(function(data){
        res.send(data);
    })
})
module.exports=router;
