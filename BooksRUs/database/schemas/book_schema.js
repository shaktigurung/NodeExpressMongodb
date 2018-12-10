const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ""
    },
   gender:{
       type: String,
       enum:["male", "female", "non-binary"],
       default: 'non-binary'
   } 
});

module.exports = BookSchema;