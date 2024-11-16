const express = require('express');
const mongoose = require('mongoose');
const {Schema} =require('mongoose');

const app = express();
app.use(express.json())

mongoose.connect('mongodb://localhost:27017').then(()=>console.log('mongodb is connected'))

const BookSchema = new Schema({
    title:{type:String, required:true},
    author:{type:String, required:true},
    year:Number,
    genre:String,
    summary:String
})

const Book = mongoose.model('Book', BookSchema);

app.post('/books', async(req,res)=>{
    const data = req.body
    const object =await Book.create(data);
    res.json(object)
})

const port = 3000
app.listen(port,()=>{
    console.log(`port listening on port ${ port }`)
})


