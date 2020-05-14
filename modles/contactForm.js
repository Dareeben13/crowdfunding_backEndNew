const mongoose = require("mongoose");



const contactFromSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 50
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: 32
    },
    telephone: {
      type: Number,
    },
    message: {
      type: String,
      trim: true,
    },
    subject: {
      type: String,
      trim: true,
    },
 
   
  },
  { timestamps: true }
);






module.exports = mongoose.model("ContactForm", contactFromSchema);