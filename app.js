const mongoose=require('mongoose');
const express=require('express');
const bodyParser=require('body-parser')

const db=require('./database/db');
const user_route=require('./routes/user_route');
const admin_route=require('./routes/admin_route');

const app=express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(user_route);
app.use(admin_route);

app.listen(90);
