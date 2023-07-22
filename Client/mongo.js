// const mongoose = require('mongoose')  
// const mongoose=import mongoose from 'mongoose';
const passWord = FnDrUxzIhv1hzVds
const url = "mongodb+srv://priyanshu223107:FnDrUxzIhv1hzVds@cluster0.nh1qkag.mongodb.net/?retryWrites=true&w=majority"

const wordSchema = new mongoose.schema({
    id: Number,
    correctWords: Number,
    })

const correctWord = mongoose.model(Contact, wordSchema)

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected')

    // const word = new Note({
    //   correctWord: 'correctWord'
    // })

    // return word.save()

  })
  .then(() => {
    console.log('word saved!')
    return mongoose.connection.close()
  })
  .catch((err) => console.log(err))