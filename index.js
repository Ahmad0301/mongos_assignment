const express = require('express');
const mongoose = require('mongoose');
const {Schema} =require('mongoose');

const app = express();
app.use(express.json())

mongoose.connect('mongodb://localhost:27017').then(()=>console.log('mongodb is connected'))

const BookSchema = new Schema(
{
    title:{type:String, required:true},
    author:{type:String, required:true},
    year:Number,
    genre:String,
    summary:String
})

const UserSchema = new Schema(
{
 name:{type:String, required:true }, 
 email:{type:String,required:true},
 password: {type:String,required:true},
 age:{Number},
 role : {type:String,required:true},
 createdAt:{Date,default:Date.now}
})

const Book = mongoose.model('Book', BookSchema);
const user = mongoose.model('user', UserSchema)

app.post('/books', async(req,res)=>{
    const data = req.body
    const object =await Book.create(data);
    res.json(object)
})

app.post('/user',async(req,resp)=>{
    const data = req.body
    const object = await user.create(data)
    resp.json(object)
})

const port = 3000
app.listen(port,()=>{
    console.log(`port listening on port ${ port }`)
})


