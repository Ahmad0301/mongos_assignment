const express = require('express');
const mongoose = require('mongoose');
const {Schema} =require('mongoose');

const app = express();
app.use(express.json())

mongoose.connect('mongodb://localhost:27017').then(()=>console.log('mongodb is connected'))

const port = 3000
app.listen(port,()=>{
    console.log(`port listening on port ${ port }`)
})


