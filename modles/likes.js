const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema


const likesSchema = new mongoose.Schema({    
      likes: {
        type: Number,
        default: 0
      },
      blog: {
        type: ObjectId,
        ref: 'Blog',
      },
      ip: {
        type: String,
        trim: true,
      },
    
}, {timestamps: true}
);




module.exports = mongoose.model("Likes", likesSchema);