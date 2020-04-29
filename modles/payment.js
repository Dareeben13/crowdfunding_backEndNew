const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema

const paymentSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: 'User',
        required: true,
      },
   
      projectId: {
        type: ObjectId,
        ref: 'Project',
        required: true,
      },
      amount: {
        type: Number,
        trim: true,
        required: true,
      },

      referenceId: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
      },
},
 {timestamps: true}
);






module.exports = mongoose.model("Payment", paymentSchema);