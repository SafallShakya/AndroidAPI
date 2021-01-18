const mongoose=require('mongoose');
const express=require('express');
const bodyParser=require('body-parser')

const db=require('./database/db');
const user_route=require('./routes/user_route');
const book_route=require('./routes/book_route');

const app=express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(user_route);
app.use(book_route);

app.listen(90);
