const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema



const individualInvestorApplicationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    firstname: {
        type: String,
        trim: true,
      },
      lastname: {
        type: String,
        trim: true,
      },
      middlename: {
        type: String,
        trim: true,
      },
      gender: {
        type: String,
        trim: true,
      },
      dob: {
        type: String,
        trim: true,
      },
      nationality: {
        type: String,
        trim: true,
      },
      userId: {
        type: ObjectId,
        ref: 'User',
        required: true,
      },
      countryOfResidence: {
        type: String,
        trim: true,
      },
      identification: {
        type: String,
        trim: true,
      },
      maidenname: {
        type: String,
        trim: true,
      },
      occupation: {
        type: String,
        trim: true,
      },
      industry: {
        type: String,
        trim: true,
      },
      estimatedAnnualIncome: {
        type: Number,
        default: 0
      },
      estimatedAnnualTurnOver: {
        type: Number,
        default: 0
      },
      originOfFunds: {
        type: String,
        trim: true,
      },
      maximumAmountForInvestment: {
        type: Number,
        default: 0
      },
  
      currency: {
        type: String,
        trim: true,
      },

      address: {
        type: String,
        trim: true,
      },
      telephone: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        trim: true,
      },
      state: {
        type: String,
        trim: true,
      },
      email: {
        type: String,
        trim: true,
      },

 






    
   
  },
  { timestamps: true }
);

// virtual field



module.exports = mongoose.model("IndividualInvestorApplication", individualInvestorApplicationSchema);