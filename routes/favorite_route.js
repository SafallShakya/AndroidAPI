const express=require('express');
const router=express.Router();
const Favorite=require('../models/favorite_model');
const{check, validationResult} = require('express-validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')



router.post('/favorite/insert',//auth.verifyUser, 
function(req,res){

    const errors = validationResult(req)
    
    if(errors.isEmpty()){
        
        const user_id=req.body.user_id;
        const pet_id= req.body.pet_id;
            const data=new Favorite(
                {
                    user_id:user_id,
                    pet_id:pet_id
                }
            );
            data.save()
            .then(function(result){
                res.status(201).json({message : "Added to Favorites!!"})
            
            })
            .catch(function(err){
                res.status(500).json({error : err})
            })
                }
        else{
            // res.send(errors.array())
            res.status(400).json(errors.array());
        }   
        })


router.get('/favorite/show',function(req,res){
    Favorite.find().then(function(data){
        res.json({
            success : true,
            data  : data
        })
    })
})

router.delete('/favorite/delete/:id',
auth.verifyUser,
 function(req,res){
    const id22=req.params.id;
    Favorite.deleteOne({_id:id22})
    .then(function(){
        res.send("deleted!!");
    })
    .catch(function(e){
        res.status(500).json({error:e})
    })
})




router.get('/favorite/singleshow/:id',
// auth.verifyUser,  
function(req,res){
    const favorite_id = req.params.id;
    Favorite.findOne({pet_id:favorite_id}).then(function(data){ 
        res.status(200).json({data:data})
    }).catch(function(e){
        res.status(500).json({error : e})
    })
})


module.exports=router;