const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema



const corporateInvestorApplicationSchema = new mongoose.Schema(
  {
    corporatename: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    dateofincorporation: {
        type: String,
        trim: true,
      },
      rcnum: {
        type: String,
        trim: true,
      },
      registeredAddress: {
        type: String,
        trim: true,
      },
      officailEmailAddress: {
        type: String,
        trim: true,
      },
      officialPhoneNumber: {
        type: Number,
        default: 0
      },
      industry: {
        type: String,
        trim: true,
      },
      estimatedAnnualTurnOver: {
        type: Number,
        default: 0
      },
      userId: {
        type: ObjectId,
        ref: 'User',
        required: true,
      },
      currency: {
        type: String,
        trim: true,
      },
      bankName: {
        type: String,
        trim: true,
      },
      accountNumber: {
        type: Number,
        default: 0
      },
      principalOfficerContactName: {
        type: String,
        trim: true,
      },
      principalOfficerPhonenumber: {
        type: Number,
        default: 0
      },
      principallOfficerEmail: {
        type: String,
        trim: true,
      },
      enquiriesContactName: {
        type: String,
        trim: true,
      },
      enquiriesPhonenumber: {
        type: Number,
        default: 0
      },
      enquiriesEmail: {
        type: String,
        trim: true,
      },
      complianceContactName: {
        type: String,
        trim: true,
      },
      compliancePhonenumber: {
        type: Number,
        default: 0
      },
      complianceEmail: {
        type: String,
        trim: true,
      },

 






    
   
  },
  { timestamps: true }
);

// virtual field



module.exports = mongoose.model("CorporateInvestorApplication", corporateInvestorApplicationSchema);