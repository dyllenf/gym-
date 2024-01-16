const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        unique: true,
        required: true,

    },
    password : {
        type: String,
        required: true,
        minlength: 8
    },
    username: {
        type: String
    }
})

const setSchema = new mongoose.Schema({
    reps : {
        type : Number,
        required : true
    },

    weight : {
        type : Number,
        required : true,
    }

})


const workoutSchema = new mongoose.Schema({
    userId : {
        type: Number,
        unique: true,
        required: true,
    },
    exercise : {
        type: "object",
        required: true,
            properties : {
                sets : [setSchema]
            } 
    },
})


module.exports = User = mongoose.model('user', userSchema)