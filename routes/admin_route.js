const express=require('express');
const router=express.Router();
const Admin=require('../models/admin_model');

router.post('/admin_insert',function(req,res){
    const admin_name=req.body.admin_name;
    const admin_email= req.body.admin_email;
    const admin_password=req.body.admin_password;
    const admin=new Admin(
        {
        admin_name:admin_name,
        admin_email:admin_email,
        admin_password:admin_password
    });
    admin.save();
})

//for delete
router.delete('/admin_delete/:id', function(req,res){
    const id22=req.params.id;
    Admin.deleteOne({_id:id22}).then(function(){
        res.send("deleted!!");
    })

})

//for update

router.put('/admin_update/:id',function(req,res){
    const id=req.params.id;
    Admin.updateOne({_id:id},req.body).then(function(){
        res.status(200).json({
            message:"Success"
        })
    
    }).catch((error)=>{
        res.status(404).json({
            error:"error"
        })
    })

})

router.get('/admin_show',function(req,res){
    Admin.find().then(function(data){
        res.send(data);
    })
})
module.exports=router;