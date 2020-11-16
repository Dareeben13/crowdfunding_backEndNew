const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema

const paymentSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: 'User',
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
        maxlength: 32,
        unique: true
      },
      status: {
        type: Number,
        default: 0
      },
},
 {timestamps: true}
);






module.exports = mongoose.model("Payment", paymentSchema);