const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema



const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    description: {
        type: String,
        trim: true,
        required: true,
      },
      pledge: {
        type: Number,
        trim: true,
        required: true,
      },
      location: {
        type: String,
        trim: true,
        required: true,
      },
      website: {
        type: String,
        trim: true,
        required: true,
      },
      returns: {
        type: String,
        trim: true,
        required: true,
      },
      category: {
        type: ObjectId,
        ref: 'Category',
        required: true,
      },
      userId: {
        type: ObjectId,
        ref: 'User',
        required: true,
      },
      duration: {
        type: String,
        trim: true,
        required: true,
    
      },
      status: {
        type: Number,
        default: 0
      },
  
      image: {
        data: Buffer,
        contentType: String,
        path:String,
        name: String
    },

    pdf: {
      data: Buffer,
      contentType: String,
      path:String,
      name: String
  }






    
   
  },
  { timestamps: true }
);

// virtual field



module.exports = mongoose.model("Project", projectSchema);