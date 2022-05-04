const { Schema, model } = require('mongoose');

const moviesSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    director:{
        type: String,
        required: true
    },
    stars:{
        type: Array,
        required: true
    },
    image:{
        type:String,
        required: true

    },
    description:{
        type: String,
        required: true
    },
    showtimes:{
        type: Array,
        required: true
    }
})

const Movies = model('Movies', moviesSchema);

module.exports = Movies;